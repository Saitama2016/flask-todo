const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: {
        app: ''
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE.ENV': JSON.stringify('production')
            }
        }),
        new UglifyJsPlugin({
            test: /\.js($|\?)/i,
            sourceMap: true
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        host: "localhost",
        proxy: {
            '/app.js': {
                target: 'http://localhost:8080'
            },
            '/vendors.js': {
                target: 'http://localhost:8080'
            },
            '/**': {
                target: 'http://localhost:4000',
                secure: false,
                changeOrigin: true
            }
        }
    }
};