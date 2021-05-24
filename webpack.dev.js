const path = require('path'); // node modulis dirbti su keliais iki failu

module.exports = {
    mode: 'development',
    entry: {
        //kuri faila paims webpackas kaip pagrindini
        main: path.resolve(__dirname, './src/app.js'), //dinamiskai pasiima faila absoliuciu keliu, nesvarbu is kokio pc paleistum
    },
    output: {},
    module: {},
    plugins: [],
};
