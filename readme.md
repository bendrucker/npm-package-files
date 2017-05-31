# npm-package-files [![Build Status](https://travis-ci.org/bendrucker/npm-package-files.svg?branch=master)](https://travis-ci.org/bendrucker/npm-package-files)

> List and detect npm package files


## Install

```
$ npm install --save npm-package-files
```


## Usage

Handles:

* `package.json`
* `npm-shrinkwrap.json`
* `package-lock.json`

```js
var isPackage = require('npm-package-files')

isPackage('package.json')
//=> true

isPackage.names['package.json']
//=> true
```

## API

#### `isPackage(basename)` -> `boolean`

##### basename

*Required*  
Type: `string`

The base file name of a package file.

#### `isPackage.names` -> `object`

A map of valid package names. The basenames are the keys and the values are `true`.


## License

MIT © [Ben Drucker](http://bendrucker.me)
