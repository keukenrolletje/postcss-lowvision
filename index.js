var postcss = require('postcss');

module.exports = postcss.plugin('postcss-lowvision', function (opts) {
    opts = opts || {};

    return function (css, result) {
      css.walkRules('html', function (rule) {
        decl.cloneBefore({ prop: 'color',  decl.value: 'transparent' });
        decl.cloneBefore({ prop: 'text-shadow',  decl.value: '0 0 5px rgba(0,0,0,1)' });
      });
    }
});
