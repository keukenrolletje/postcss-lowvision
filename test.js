import postcss from 'postcss';
import test    from 'ava';

import plugin from './';

function run(t, input, output) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            t.deepEqual(result.css, output);
            t.deepEqual(result.warnings().length, 0);
        });
}

// This test passed.
test('reverse color value from dlog to gold', t => {
    return run(t, 'a{ color: dlog }', 'a{ color: gold }');
});
