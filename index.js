var postcss = require('postcss');

module.exports = postcss.plugin('postcss-lowvision', function (opts) {
    opts = opts || {};

    return function (css, result) {
      css.walkRules('html', function (rule) {
        /*root.first.append({ prop: 'color', value: 'transparent' });
        root.first.append({ prop: 'text-shadow', value: '0 0 5px rgba(0,0,0,1)' });*/
        postcss.parse('html { color: transparent; text-shadow: 0 0 5px rgba(0,0,0,1);}');
      });
    }
});
