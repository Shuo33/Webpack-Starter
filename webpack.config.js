const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        //allow us to use the absolute file path
        // __dirname means current directory
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    // configure the webpack server
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    },
    // definir the rules of the loader
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    // have the instance of the plugins inside the array, like an instance of HtmlWebpackPlugin for exemple 
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
};