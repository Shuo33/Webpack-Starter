const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        //allow us to use the absolute file path
        // __dirname means current directory
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};