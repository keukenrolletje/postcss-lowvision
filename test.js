import postcss from 'postcss';
import test    from 'ava';

import plugin from './';

function run(t, input, output, opts) {
    t.same(postcss([ plugin ]).process(input).css, output);
}

test('adds blur to html', t => {
    return run(t, 'html {}', 'html {color: transparent; text-shadow:0 0 5px rgba(0,0,0,1);} ');
});
