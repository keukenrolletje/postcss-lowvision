import postcss from 'postcss';
import test    from 'ava';

import plugin from './';

function run(t, input, output) {
    return postcss([ plugin ]).process(input)
        .then( result => {
            t.deepEqual(result.css, output);
            t.deepEqual(result.warnings().length, 0);
        });
}

test('adds blur to html', t => {
    return run(t, 'html {}', 'html { color: transparent; text-shadow: 0 0 5px rgba(0,0,0,1); } ');
});
