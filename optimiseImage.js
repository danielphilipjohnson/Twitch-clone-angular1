const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
 
(async () => {

    const sourceImages = await imagemin(['img/categories/*.{jpg,jpeg,png}'], {
        destination: 'img/resized',
        plugins: [
            imageminJpegtran(),
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
    });
    console.log(sourceImages);
    const images = await imagemin(['img/*.{jpg,jpeg,png}'], {
        destination: 'img/resized',
        plugins: [
            imageminJpegtran(),
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
    });




})();