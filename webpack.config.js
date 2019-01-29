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
    resolve: {
        alias: {}
    }
}