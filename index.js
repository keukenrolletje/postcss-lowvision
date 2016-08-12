var postcss = require('postcss');

module.exports = postcss.plugin('postcss-lowvision', function (opts) {
    opts = opts || {};

    // Work with options here, result

    return function (css) {

        // Runs through all of the nodes (declorations) in the file
        css.walkDecls(declaration => {
          declaration.value = declaration.value.split('').reverse().join('');
        });

    };
});
