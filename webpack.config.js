const path = require('path');

module.exports = {
    entry: './src/app.js', //relative path
    output: {
        path: path.join(__dirname, 'public'), //absolute path
        filename: 'bundle.js', //filename
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};