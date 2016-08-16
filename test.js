import postcss from 'postcss';
import test    from 'ava';

import plugin from './';

function run(t, input, output) {
    return postcss([ plugin ]).process(input)
        .then( result => {
            t.is(result.css, output);
            t.is(result.warnings().length, 0);
        });
}

test('adds blur to html', t => {
    return run(t, 'html {}', 'html { color: transparent; text-shadow: 0 0 5px rgba(0,0,0,1); } ');
});
