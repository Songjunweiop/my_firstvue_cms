const path = require('path')
const webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')
var VueLoaderPlugin= require('vue-loader/lib/plugin')  //导入vue

module.exports = {
    entry: path.join(__dirname, './src/main.js'),//入口， 表示要使用webpack 打包到哪个文件中去
    output: {  //输出文件相关配置
        path: path.join(__dirname, './dist'),  //指定 打包好的文件，输出到哪个目录文件中去
        filename: 'bundle.js'   //这是指定输出的文件的名称
    },
    mode: 'development',

    plugins: [   //  所有的 webpack 插件的配置节点
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),  //  指定模板文件路径
            filename: 'index.html'  // 设置生成的内存页面的名称
        }),
        new VueLoaderPlugin({              //导入vue
            template: path.join(__dirname,'/src/login.vue'),
            filename:'login.vue'
        })
    ],

    module: {    //这个节点用于配置 所有第三方模块 加载器
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },//处理css的loader
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },//处理less的loader
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },//处理scss的loader
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: ['url-loader?limit=57275&name=[hash:8]-[name].[ext]'] },
            //其中： limit是给定的值， 是图片的大小，单位是byte
            //name=[hash:8]-[name].[ext] 是给图片的名称为他原本的名称，再在前面加一个hash值，作为区分

            //这里是处理字体的loader    
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
            { test:/\.vue$/,use:'vue-loader'},//处理.vue的loader

        ]
    },

    resolve: {
        alias: {  // 修改vue导入时 的包的路径
            // "vue$": "vue/dist/vue.js"
        }
    }
}