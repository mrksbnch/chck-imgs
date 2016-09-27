# Chck Imgs
`chckImgs` is a lightweight (< 400 bytes gzipped) JavaScript function to check if one or multiple images are loaded.

## Install
**NPM**

```shell
npm install --save chck-imgs
```

**Bower**
```shell
bower install --save chck-imgs
```

## Usage
```javascript
/**
 * `chckImgs` will always resolve with an array, even if one or multiple images failed to load.
 * You can loop through this array and check the `status` (`ok` or `error`) for each image
 *
 * @param  {...String} paths
 * @return {Promise.<{{path: String, status: String}}>}
 */
chckImgs('img.jpg', 'img2.jpg').then(function(imgs) {
    // All images are either loaded or failed to load.
});
```

## Browser Support
All major browsers are supported (IE9+). You'll have to [polyfill `ES6 Promises`](https://github.com/taylorhakes/promise-polyfill) for [browsers that do not support native Promises](http://caniuse.com/#feat=promises) yet.

## Local Development
To compile and compress `chckImgs.js`, we rely on [npm](https://www.npmjs.com/) as a Build Tool.

### Setup
1. Check out the repository

    ```shell
    git clone git@github.com:mrksbnch/chck-imgs.git
    cd chck-imgs
    ```

2. Run `npm install` to install all dependencies

### Workflow
| NPM command                   | Description                                                      |
| ----------------------------- | ---------------------------------------------------------------- |
| `npm run lint`                | (es)lint JavaScript                                              |
| `npm run uglify`              | Compress JavaScript                                              |
| `npm run babel`               | Compile ES6 to ES5 with Babel                                    |
| `npm run build`               | Lint, compress and minify JavaScript                             |
| `npm run watch`               | Watch file changes                                               |

## Copyright
Copyright 2016 Markus Bianchi. See [LICENSE](https://github.com/mrksbnch/chck-imgs/blob/master/LICENSE.md) for details.
