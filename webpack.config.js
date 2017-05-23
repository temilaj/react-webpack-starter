const path = require('path');
const port = process.env.PORT || 3000;

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/, 
                query: {
                    presets:['es2015','react']
                }
            }
        ]
    },
    devServer: {
        port,
    }
}