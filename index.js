var postcss = require('postcss');

module.exports = postcss.plugin('postcss-lowvision', function (opts) {
    opts = opts || {};

    return function (css, result) {
      css.walkRules('html', function (decl, rule) {
        if ( decl.selector !== -1 ){
          decl.append({ prop: 'color',  value: 'transparent' });
          decl.append({ prop: 'text-shadow',  value: '0 0 5px rgba(0,0,0,1)' });
        }
      });
    }
});
