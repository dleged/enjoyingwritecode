# css-annotation [![Build Status](https://travis-ci.org/morishitter/css-annotation.svg)](https://travis-ci.org/morishitter/css-annotation)

Annotation parser for CSS

## Installation

```shell
$ npm install css-annotation
```

## Example

`input.css`:

```css
/*
 * @foo foofoo
 * @bar bar bar bar
 */

@media screen (min-width: 600px) {
  /*
   * @hoge
   */
  .class {
    /*
     * @baz baz1, baz2, baz3
     */
     font-size: 12px;
  }
}
```

```js
var fs = require('fs')
var annotation = require('./')

var css = fs.readFileSync('input.css', 'utf-8').trim()

annotation.parse(css)
/*
[
  {
    foo: 'foofoo',
    bar: 'bar bar bar'
  },
  {
    atrule: 'media',
    hoge: true,
    params: 'screen (min-width: 600px)'
  },
  {
    baz: ['baz1', 'baz2', 'baz3']
    rule: '.class'
  }
]
*/
```

## API

### `annotation.parse(css)`

Parse annotation comment in `css` and return array of its results.

### `annotation.read(commentText)`

`commentText` is [PostCSS's `comment.text`](https://github.com/postcss/postcss/blob/master/API.md#commenttext).

Return its parse results.



## License

The MIT License (MIT)

Copyright (c) 2014 Masaaki Morishita
