const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'production',
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    resolve: {
        fallback: {
            // imported by char-width-table-consumer <- anafanafo,
            // but we don't need these since we won't dynamically generate them.
            fs: false,
            util: path.resolve(__dirname, 'src/util.js'),
        },
    },
    optimization: {
        minimizer: [
            '...',
            new CssMinimizerWebpackPlugin(),
        ]
    },
};
