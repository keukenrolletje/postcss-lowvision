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
    run(t, 'a { color: #FFC0CB; }',
           'a { color: rgb(255, 192, 203); text-shadow: 0 0 5px rgba(0,0,0,0.5) }');
});
