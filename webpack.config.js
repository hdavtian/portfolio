var webpack = require('webpack');

module.exports = {
    entry: './src/js/site/app.js',
    output: {
        path: __dirname + '/build/js',
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                // query: {
                //     presets: [
                //         ['env', { modules: false }],
                //     ],
                // },
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            test: /\.js|jsx$/,
            exclude: /node-modules/
        }),
    ]
};