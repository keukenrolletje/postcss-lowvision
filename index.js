var postcss = require('postcss');

module.exports = postcss.plugin('postcss-lowvision', function (opts) {
    opts = opts || {};

    return function (css, result) {
      css.walkRules(function (rule) {
            if ( rule.selector.indexOf('html') !== -1 ) {
                  root.first.append({ prop: 'color', value: 'transparent' });
                  root.first.append({ prop: 'text-shadow', value: '0 0 5px rgba(0,0,0,1)' });
            }
      });
    }
});
