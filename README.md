# PostCSS Lowvision [![Build Status][ci-img]][ci]

[PostCSS] plugin to simulate how your website will look for low vision users.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/keukenrolletje/postcss-lowvision.svg
[ci]:      https://travis-ci.org/keukenrolletje/postcss-lowvision

```css
.foo {
    color: #FFC0CB;
}
```

```css
.foo {
    color: transparent;
    text-shadow: 0 0 5px rgba(255, 192, 203, 1);
}
```

## Usage
Add strength option between 0 and 15.
```js
postcss([ require("postcss-lowvision")({strength:'2'}) ])
```

See [PostCSS] docs for examples for your environment.
