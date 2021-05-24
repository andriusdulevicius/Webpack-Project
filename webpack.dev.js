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
                test: /\.css$/i, //pritaikom .cc failam
                use: ['style-loader', 'css-loader'], //uzkraunam css
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, //taspats ieskosim js failu, isskyrus(exlude) node_modules faile
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'], //kiek daug atgal i praeiti mes norim sugrizti(kad veiktu ant senu narsykliu)
                    },
                },
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
