const { RuleTester } = require('eslint');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, '.src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                    ],
                },
            ]
        }
};



