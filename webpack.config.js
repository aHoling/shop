const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    // mode:'development',
    entry: path.join(__dirname, '/src/main.js'),
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: 'src',
        port: 3000,
        open: true,
        hot: true
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), //指定 模板页面，将来会根据指定的页面路径，去生成内存中的页面
            filename: 'index.html' //指定生成的页面的名称
        }),

    ],
    module: {
        rules: [
            {// 处理 .vue 文件的 loader
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {// 处理 CSS 文件的 loader
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            { // 处理 less 文件的 loader
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            { // 处理 图片路径的 loader
                // limit 给定的值，是图片的大小，单位是 byte， 如果我们引用的 图片，大于或等于给定的 limit值，则不会被转为base64格式的字符串， 如果 图片小于给定的 limit 值，则会被转为 base64的字符串
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]'
            },
            {// 处理 字体文件的 loader 
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: 'url-loader'
            },
            { // 配置 Babal 来转换高级的 JS 语法
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}