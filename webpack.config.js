const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = (env) => {
    const mode = env.mode;

    const configuration = {
        mode: mode,
        entry: path.resolve(__dirname, 'src', 'app', 'index.js'),
        output: {
            path: path.resolve(__dirname, 'docs'),
            filename: 'app.js',
            pathinfo: false,
        },
        devtool: mode === 'development' ? 'source-map' : false,
        devServer: {
            open: true,
            overlay: {
                warnings: true,
                errors: true,
            },
            inline: true,
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            modules: [path.resolve(__dirname, 'src/app'), 'node_modules'],
        },
        module: {
            rules: [
                // first eslint-loader to avoid babel effect
                {
                    enforce: 'pre',
                    test: /\.(js|jsx)$/,
                    use: 'eslint-loader',
                    include: [path.resolve(__dirname, 'src/app')],
                    exclude: /node_modules/,
                },
                {
                    test: /\.(js|jsx)$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-react', '@babel/preset-env'],
                            },
                        },
                    ],
                    include: [path.resolve(__dirname, 'src/app')],
                    exclude: /node_modules/,
                },
                { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                hash: true,
                template: './src/www/index.html',
            }),
        ],
    };

    if (mode !== 'production') {
        configuration.optimization = {
            // avoid extra optimization steps in development
            removeAvailableModules: false,
            removeEmptyChunks: false,
            splitChunks: false,
        };
    }

    return configuration;
};

module.exports = config;
