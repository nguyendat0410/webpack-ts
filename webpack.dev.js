const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: 'development',
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				type: 'asset/inline',
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
	],
	optimization: {
		minimizer: [],
		splitChunks: {
			cacheGroups: {
				default: false,
				vendors: false,
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					// filename: '[name].bundle.js',
					chunks: 'all',
					// enforce: true,
				},
			},
		},
	},
	devServer: {
		historyApiFallback: true,
		// static: '/',
		open: true,
		compress: true,
		hot: true,
		port: 3000,
		allowedHosts: 'all',
		client: {
			logging: 'info',
			progress: true,
			reconnect: true,
		},
		// http2: true,
		headers: {
			'X-Custom-Foo': 'bar-custom',
		},
		// host: 'example.com',\
		// https: true,
		// https: {
		// 	key: fs.readFileSync('key file'),
		// 	cert: fs.readFileSync('crt file'),
		// 	ca: fs.readFileSync('ca file'),
		// },
	},
});
