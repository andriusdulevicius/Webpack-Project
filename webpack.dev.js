const path = require('path'); // node modulis dirbti su keliais iki failu
const HtmlWebpackPlugin = require('html-webpack-plugin'); //html generavimo pluginas.
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin'); //img suspaudimo pluginas

module.exports = {
    mode: 'development',

    devtool: 'source-map', //is cia matome consoleje is kurio failo kokia eilute atlekiavo
    entry: {
        //kuri faila paims webpackas kaip pagrindini
        main: path.resolve(__dirname, './src/app.js'), //dinamiskai pasiima faila absoliuciu keliu, nesvarbu is kokio pc paleistum
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, //isvalome pries tai dist folderyje buvusius failus
        assetModuleFilename: 'images/[name][ext]',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8080,
    },
    module: {
        rules: [
            //images rules
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                type: 'asset/resource',
            },

            //css loader
            {
                test: /\.css$/i, //pritaikom .cc failam
                use: ['style-loader', 'css-loader', 'postcss-loader'], //uzkraunam css
            },
            //babel loader
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
        new ImageMinimizerPlugin({
            minimizerOptions: {
                plugins: [
                    ['imagemin-webp'],
                    ['mozjpeg', { quality: 50 }],
                    ['gifsicle'],
                    ['pngquant', { quality: [0.5, 0.7] }],
                    ['imagemin-svgo'],
                ],
            },
        }),
    ],
};
