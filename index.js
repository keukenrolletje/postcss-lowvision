
var postcss = require('postcss'),
    color = require('color');

module.exports = postcss.plugin('postcss-lowvision', function () {
    return function (css) {
        css.walkDecls('color', function (decl) {
            var val = decl.value;
            var rgb = color(val);
            rgb = rgb.rgbArray();
            decl.value = 'transparent';
            decl.cloneAfter({ prop: 'text-shadow',
                              value: '0 0 5px rgba(' + rgb[0] + ', ' + rgb[1] + ', ' + rgb[2] + ', ' + '1)' });
        });
        css.walkRules('img', function (decl) {
        // Find all filter declarations
        css.walkDecls('filter', function (decl) {
            // Add blur filter to existing filters
            decl.value = 'blur(5px) ' + decl.value;
         });
        //find all images in css
      	css.walkRules('img', function (decl) {
            //Add blur filter to images
            decl.append({ prop: 'filter',  value: 'blur(5px)' });
        });
    };
});
