# umi-plugin-chunk-runtime

[![Build Status](https://img.shields.io/travis/aixfox/umi-plugin-chunk-runtime.svg?style=flat-square)](https://travis-ci.org/aixfox/umi-plugin-chunk-runtime)
[![NPM version](https://img.shields.io/npm/v/umi-plugin-chunk-runtime.svg?style=flat-square)](https://www.npmjs.com/package/umi-plugin-chunk-runtime)
[![NPM downloads](https://img.shields.io/npm/dm/umi-plugin-chunk-runtime.svg?style=flat-square)](https://www.npmjs.com/package/umi-plugin-chunk-runtime)

Generating webpack runtime chunk to html, useful for network cache.

## Install

```shell
npm i -D umi-plugin-chunk-runtime
```

## Usage

Configure in `.umirc.js` or `config/config.js`,

```js
export default {
  plugins: [
    ['umi-plugin-chunk-runtime'],
  ],
}
```
