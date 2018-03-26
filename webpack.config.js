const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const extractCss = new CssExtractPlugin({
    filename: './dist/assets/app.css'
});

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                include: /src/,
                exclude: /node_modules/
            },
            {
                test: /.html$/,
                use: 'html-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                include: [path.resolve(__dirname, 'src', 'assets', 'scss')],
                use: [
                    CssExtractPlugin.loader,
                    'css-loader',
                    'scss-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CssExtractPlugin({
            filename: '[name].[chunkHash].css',
            chunkFilename: '[name].[id].css'
        }),
        new UglifyPlugin({
            include: /\.tsx?$/,
            uglifyOptions: {
                ecma: 8,
                warnings: true,
                mangle: false,
                compress: {
                    dropDebugger: false,
                    deadCode: false,
                },
                output: {
                    beautify: true,
                    width: 140,
                }
            },
        })
    ],
    devServer: {
        stats: "normal",
        open: true,
        port: 3000,
        compress: true
    },
    devtool: 'eval-source-map',
    output: {
        filename: 'bundle.[chunkHash].js',
        path: path.resolve(__dirname, 'dist')
    }
}