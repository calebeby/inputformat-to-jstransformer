# outputformat-to-jstransformer

Load the first available [JSTransformer](https://github.com/jstransformers/jstransformer) from the provided `outputFormat`.

[![Build Status](https://img.shields.io/travis/calebeby/outputformat-to-jstransformer/master.svg)](https://travis-ci.org/jstransformers/outputformat-to-jstransformer)
[![Dependency Status](https://img.shields.io/david/calebeby/outputformat-to-jstransformer.svg)](https://david-dm.org/jstransformers/outputformat-to-jstransformer)
[![NPM version](https://img.shields.io/npm/v/outputformat-to-jstransformer.svg)](https://www.npmjs.org/package/outputformat-to-jstransformer)

## Installation

    npm install outputformat-to-jstransformer

## API

### `(outputFormat)`

Returns the first package available to process the given `outputFormat`; `false` if no package is available.

```js
var jstransformer = require('jstransformer')
var outputFormatToTransformer = require('outputformat-to-jstransformer')

var md = outputFormatToTransformer('md')
// => remarkable, markdown, markdown-it, marko, or supermarked

jstransformer(md).render('# Hello World!').body
// => '<h1>Hello World!</h1>'
```

### `.dictionary`

The [`dictionary.json`](dictionary.json) array is also available:

``` js
var outputFormats = require('outputformat-to-jstransformer').dictionary
if (outputFormats['tiff']) {
  console.log('output formats of Tiff are supported!')
}
```


## Update

To update `dictionary.json`, run:

```
npm run build
```

## License

MIT
