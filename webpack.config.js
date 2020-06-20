const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        bundle: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',

    }, plugins: [
        new HtmlWebpackPlugin({
                title: "Adventure Capitalist"
            }
        )
    ],
    module: {
        rules: [{
            test:/\.scss$/,
            use:['style-loader','css-loader','sass-loader']
        }

        ]
    }
};
