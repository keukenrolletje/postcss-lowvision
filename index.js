
var postcss = require('postcss'),
    color = require('color');

module.exports = postcss.plugin('postcss-lowvision', function (opts) {
    opts = opts || 5;
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
                              value: '0 0 ' + opts + 'px rgba(' + rgb[0] + ', ' + rgb[1] + ', ' + rgb[2] + ', ' + '1)' });
        });

        // Find all filter declarations using regex to allow prefixes
        css.walkDecls(/filter*/, function (decl) {
            // Add blur filter to existing filters
            decl.value = 'blur(5px) ' + decl.value;
        });

          // Find all images in css
        css.walkRules('img', function (decl) {
            // Add blur filter to images
            decl.append({ prop: 'filter',  value: 'blur(5px)' });
        });
    };
});
