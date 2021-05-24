const path = require('path'); // node modulis dirbti su keliais iki failu
const HtmlWebpackPlugin = require('html-webpack-plugin'); //html generavimo pluginas.

module.exports = {
    mode: 'development',
    entry: {
        //kuri faila paims webpackas kaip pagrindini
        main: path.resolve(__dirname, './src/app.js'), //dinamiskai pasiima faila absoliuciu keliu, nesvarbu is kokio pc paleistum
    },
    output: {},
    module: {},
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/template.html',
            templateParameters: {
                title: 'We now know Webpack.',
            },
            minify: { removeComments: true, collapseWhitespace: false },
        }),
    ],
};
