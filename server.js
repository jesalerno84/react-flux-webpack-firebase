var webpack = require('webpack'),
    WebPackDevServer = require('webpack-dev-server'),
    config = require('./webpack.config.js');

new WebPackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(8080, 'localhost');