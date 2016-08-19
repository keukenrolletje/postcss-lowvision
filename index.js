
var postcss = require('postcss'),
    colors = require('color');

module.exports = postcss.plugin('postcss-lowvision', function () {
    return function (css) {
        css.walkDecls('color', function (decl) {

            decl.value = decl.value;
            decl.cloneAfter({ prop: 'text-shadow', value: '0 0 5px rgba(0,0,0,0.5)'});
        });
    };
});
