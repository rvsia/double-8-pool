const path = require('path')

module.exports = {
    entry: {
        client: path.resolve(__dirname, './src/client/index.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
              }
            }
        ]
    }
}    

