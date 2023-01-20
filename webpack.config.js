const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const sourceFolder = path.resolve(__dirname, 'src');
const publicFolder = path.resolve(__dirname, 'public');

module.exports = {
    entry: [
        path.resolve(sourceFolder, 'js', 'index.js'),
        path.resolve(sourceFolder, 'css', 'index.css')
    ],
    output: {
        path: publicFolder,
        filename: 'bundle.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(sourceFolder, 'index.html'),
            favicon: path.resolve(sourceFolder, 'assets', 'favicon.png'),
            inject: 'head'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(sourceFolder, 'import-templates'),
                    to: path.resolve(publicFolder, 'import-templates')
                },
            ],
        }),
    ],
};