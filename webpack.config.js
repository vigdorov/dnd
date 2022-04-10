const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = (env) => ({
    mode: env.production ? 'production' : 'development',
    entry: {
        app: {
            import: './view/app/index.tsx',
            dependOn: [
                'rct', 
            ],
        },
        'rct': ['react', 'react-dom', 'react-router-dom'],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[fullhash].[name].js',
    },
    devServer: {
        historyApiFallback: true,
        compress: true,
        open: true,
        port: 3189,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    enforce: true,
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.(txt|json)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './view/public/index.html',
            filename: 'index.html',
            favicon: './view/public/favicon.ico'
        }),
        new MiniCssExtractPlugin({
            filename: '[fullhash].[name].css',
        }),
        new CleanWebpackPlugin(),
    ],
});