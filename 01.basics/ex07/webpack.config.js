const path = require('path');

module.exports = {
    mode : "none",
    entry : path.resolve('src/index.js'),
    output : {
        path : path.resolve('public'),
        filename : 'bundle.js',
        assetModuleFilename : 'assets/images/[hash][ext]'
    },
    module : {
        rules : [{
            test : /\.js$/i,
            exclude : /node_modules/,
            loader : 'babel-loader'
        }, {
            test: /\.(sa|sc|c)ss$/i,
            use:['style-loader', 'css-loader', 'sass-loader']
        }, {
            test:/\.(svg|jpe?g|gif|png|tiff?|bmp|ico|)$/i,
            loader : 'file-loader',
            options : {
                outputPath : '/assets/images',
                name : '[name].[ext]'
            }
        }]
    },
    devtool : "eval-source-map",
    devServer : {
        contentBase : path.resolve('public'),
        watchContentBase : true,
        host: '0.0.0.0',
        port : 9999,
        inline : true,
        liveReload :true,
        hot : false,
        compress : true,
        historyApiFallback : true
    }
}