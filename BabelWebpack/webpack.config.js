const path = require('path');

module.exports = {
    mode: "development", // could be "production" as well
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            debug: true,
                            corejs: 3,
                            useBuiltIns: "usage"
                        }]
                    ]
                }
            }
        }]
    }
};