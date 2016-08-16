var postcss = require('postcss');

module.exports = postcss.plugin('postcss-lowvision', function () {
    return function (css) {
      css.walkRules('html', function (decl) {
        if ( decl.selector !== -1 ){
          decl.append({ prop: 'color',  value: 'transparent' });
          decl.append({ prop: 'text-shadow',  value: '0 0 5px rgba(0,0,0,1)' });
        }
      });
    }
});
