module.exports = {
    entry: './index.js',
    output: {
        filename: './bundle.js',
    }
};
module.exports = {
    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader' },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: 'sass-loader'
            },
        ],
    },
};
