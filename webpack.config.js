const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractText = new ExtractTextPlugin({
    filename: './dist/assets/app.css'
});

module.exports = {
    entry: './src/index.ts',
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
                use: extractText.extract({
                    use: [
                    {
                        loader: 'css-loader',
                        options: {sourceMap: false}
                    },
                    {
                        loader: 'scss-loader',
                        options: {sourceMap: false}
                    }
                ],
                    fallback: 'style-loader'
                })
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
        extractText
    ],
    devServer: {
        stats: "normal",
        open: true,
        port: 3000,
        compress: true
    },
    devTool: 'eval-source-map',
    output: {
        filename: 'bundle.[chunkHash].js',
        path: path.resolve(__dirname, 'dist')
    }
}