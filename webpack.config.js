const devMode = process.env.NODE_ENV !== 'production'
const webpack = require('webpack') 
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
 
module.exports = { 
    mode: devMode ? 'development' : 'production', 
    entry: './src/main.js', 
    output: {
        filename: 'app.js',
        path: __dirname + '/public'
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devServer: {
        contentBase: './public',
        port: 8080
    }
} 