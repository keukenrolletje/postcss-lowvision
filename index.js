
var postcss = require('postcss'),
    colors = require('color');

module.exports = postcss.plugin('postcss-lowvision', function () {
    return function (css) {
        css.walkDecls('color', function (decl) {
            var color = decl.value
            var rgb = colors.rgb(color);
            decl.value = rgb;
            decl.cloneAfter({ prop: 'text-shadow',
                              value: '0 0 5px rgba(0,0,0,0.5)' });
        });
    };
});
