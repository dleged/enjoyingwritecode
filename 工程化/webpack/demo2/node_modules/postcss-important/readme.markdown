# postcss-important [![Build Status](https://travis-ci.org/morishitter/postcss-important.svg)](https://travis-ci.org/morishitter/postcss-important)

PostCSS plugin for annotations based `!important`

## Installation

```shell
$ npm install postcss-important
```

## Example

```js
// Dependencies
var fs = require('fs')
var postcss = require('postcss')
var important = require('postcss-important')

// CSS to be processed
var css = fs.readFileSync('input.css', 'utf-8')

// Process CSS
var output = postcss()
  .use(important(css))
  .process(css)
  .css
```

Using this `input.css`:

```css
.foo {
  /* @important */
  font-size: 12px !important;
  color: red;
}

.bar {
  /*
   * @important color, padding
   */
  color: red;
  font-size: 12px;
  padding: 10px;
}
```

You will get:

```css
.foo {
  /* @important */
  font-size: 12px !important;
  color: red !important;
}

.bar {
  /*
   * @important color, padding
   */
  color: red !important;
  font-size: 12px;
  padding: 10px !important;
}
```

## License

The MIT License (MIT)

Copyright (c) 2014 Masaaki Morishita
