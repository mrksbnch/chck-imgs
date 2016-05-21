/*------------------------------------*\
    #CHCK-IMGS 0.0.2
\*------------------------------------*/
/**
 * Check if one image is loaded
 *
 * @param  {String} path
 * @return {Promise.<{{path: String, status: String}}>}
 */
const chckImg = path =>
    new Promise(resolve => {
        const img = new Image();

        img.onload = () => resolve({ path, status: 'ok' });
        img.onerror = () => resolve({ path, status: 'error' });

        img.src = path;
    });

/**
 * Check if one or multiple images are loaded
 *
 * @param  {...String} paths
 * @return {Promise.<{{path: String, status: String}}>}
 */
const chckImgs = (...paths) => Promise.all(paths.map(chckImg));

export default chckImgs;
