
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

        // Find body
        css.walkRules('body', function (decl) {
            // Add blur filter to images
            decl.append({ prop: 'filter',  value: 'blur(' + strength + 'px)' });
            decl.append({ prop: 'filter',  value: 'url("blur.svg#gaussian_blur")' });
            decl.append({ prop: '-webkit-filter',  value: 'blur(' + strength + 'px)' });
            decl.append({ prop: '-o-filter',  value: 'blur(' + strength + 'px)' });
        });
    };
});
