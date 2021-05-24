const path = require('path'); // node modulis dirbti su keliais iki failu
const HtmlWebpackPlugin = require('html-webpack-plugin'); //html generavimo pluginas.

module.exports = {
    mode: 'development',
    entry: {
        //kuri faila paims webpackas kaip pagrindini
        main: path.resolve(__dirname, './src/app.js'), //dinamiskai pasiima faila absoliuciu keliu, nesvarbu is kokio pc paleistum
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, //isvalome pries tai dist folderyje buvusius failus
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/template.html',
            templateParameters: {
                title: 'We now know Webpack.',
                mainTitle: 'This is easy',
            },
            minify: { removeComments: true, collapseWhitespace: false },
        }),
    ],
};
