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
    text-shadow: 0 0 5px rgba(255, 192, 203, 1)
}
```

## Usage

```js
postcss([ require('postcss-lowvision') ])
```

See [PostCSS] docs for examples for your environment.
