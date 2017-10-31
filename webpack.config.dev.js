const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;
const outputPath = path.join(__dirname, "dist")

module.exports = {
	entry: './src/App.jsx',
	output: {
		path: __dirname,
		filename: 'dist/bundle.js'
	},
	resolve: {
		modules: ['node_modules', './src'],
		extensions: ['.js', '.jsx'],
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader!sass-loader'
				}),
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader'
				}),
			},
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("bundle.css"),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			inject: true,
			template: path.join(__dirname, '/index.html')
		}),
		new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
	],
	devtool: "source-map",
	devServer: {
		port,
		hot: true,
		historyApiFallback: true
	}
}