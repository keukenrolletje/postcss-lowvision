
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
                              value: '0 0 5px rgba(' + rgb[0] + ', ' + rgb[1] + ', '+ rgb[2] + ', ' + '0.5)' });
        });
    };
});
