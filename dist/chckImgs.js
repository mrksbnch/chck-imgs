(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define('chckImgs', ['module', 'exports'], factory);
    } else if (typeof exports !== "undefined") {
        factory(module, exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, mod.exports);
        global.chckImgs = mod.exports;
    }
})(this, function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    /*------------------------------------*\
        #CHCK-IMGS 0.0.1
    \*------------------------------------*/
    /**
     * Check if one image is loaded
     *
     * @param  {String} path
     * @return {Promise.<{{path: String, status: String}}>}
     */
    var chckImg = function chckImg(path) {
        return new Promise(function (resolve) {
            var img = new Image();

            img.onload = function () {
                return resolve({ path: path, status: 'ok' });
            };
            img.onerror = function () {
                return resolve({ path: path, status: 'error' });
            };

            img.src = path;
        });
    };

    /**
     * Check if one or multiple images are loaded
     *
     * @param  {...String} paths
     * @return {Promise.<{{path: String, status: String}}>}
     */
    var chckImgs = function chckImgs() {
        for (var _len = arguments.length, paths = Array(_len), _key = 0; _key < _len; _key++) {
            paths[_key] = arguments[_key];
        }

        return Promise.all(paths.map(chckImg));
    };

    exports.default = chckImgs;
    module.exports = exports['default'];
});