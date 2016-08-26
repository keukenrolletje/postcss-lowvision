
var postcss = require('postcss'),
    color = require('color');

module.exports = postcss.plugin('postcss-lowvision', function (opts) {
    opts = opts || {};
    var strength = opts.strength ? opts.strength : '5';
    return function (css) {
        // Get all css with color declaration
        css.walkDecls('color', function (decl) {
            // Value of colors
            var val = decl.value;

            // Tranform color to rgb array
            var rgb = color(val);
            rgb = rgb.rgbArray();

            // Color transparent
            decl.value = 'transparent';

            // Use text-shadow to add a blur effect and use rgb as color
            decl.cloneAfter({ prop: 'text-shadow',
                              value: '0 0 ' + strength + 'px rgba(' + rgb[0] + ', ' + rgb[1] + ', ' + rgb[2] + ', ' + '1)' });
        });

        // Find all filter declarations using regex to allow prefixes
        css.walkDecls(/filter*/, function (decl) {
            // Add blur filter to existing filters
            decl.value = 'blur(' + strength + 'px) ' + decl.value;
        });

          // Find all images in css
        css.walkRules('img', function (decl) {
            // Add blur filter to images
            decl.append({ prop: 'filter',  value: 'blur(' + strength + 'px)' });
        });

        // List every selector
        var selectors = [];
        css.walkRules(function (rule) {
            rule.selectors.forEach(function (selector) {
                selectors.push(selector);
            });
        });

        // Check of list of selector includes body, if it does not exist append body to css
        if (!selectors.includes('body')) {
            css.append({ selector: 'body' });
        }

        // Find body
        css.walkRules('body', function (decl) {
            // Add blur filter to body
            decl.append({ prop: '-webkit-filter',  value: 'blur(' + strength + 'px)' });
            decl.append({ prop: '-o-filter',  value: 'blur(' + strength + 'px)' });
            decl.append({ prop: '-ms-filter',  value: 'blur(' + strength + 'px)' });
            decl.append({ prop: 'filter',  value: 'url("data:image/svg+xml;utf8,<svg style=\'position: absolute; top: -99999px\' xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'svgBlur\' x=\'-5%\' y=\'-5%\' width=\'110%\' height=\'110%\'><feGaussianBlur in=\'SourceGraphic\' stdDeviation=\'' + strength + '\'/></filter></svg>#svgBlur");' });
            decl.append({ prop: 'filter',  value: 'progid:DXImageTransform.Microsoft.Blur(PixelRadius="' + strength + '")' });
            decl.append({ prop: 'filter',  value: 'blur(' + strength + 'px)' });
            
            // Add overflow visible to prevent overflow hidden (makes the whole website invisible)
            decl.append({ prop: 'overflow',  value: 'visible' });
            // With position relative the page disappears
            decl.append({ prop: 'position',  value: 'absolute' });
        });
    };
});
