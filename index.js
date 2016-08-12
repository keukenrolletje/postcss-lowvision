var postcss = require('postcss');

module.exports = postcss.plugin('postcss-lowvision', function (opts) {
    opts = opts || {};

    return function (css, result) {
      css.walkRules(function (rule) {
            if ( rule.selector.indexOf('html') !== -1 ) {
                  rule.append({ prop: 'color', value: 'transparent' });
                  rule.append({ prop: 'text-shadow', value: '0 0 5px rgba(0,0,0,1)' });
            }
      });
    }
});
