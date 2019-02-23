const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry:{
        index:'./src/js/index.js'
        // detail:'./src/js/detail.js'
    },
    mode:'development',
    output:{
        filename:'js/[name].[hash].js',
        path:path.join(__dirname,'./dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/nodule_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test:/\.scss$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','sass-loader']
                })
            },
            {
                test:/\.(png|jpe?g|gif|svg)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:12,
                        publicPath:'/',
                        name:'imgs/[name].[ext]'
                    }
                }
            },
            {
                test:/\.html$/,
                use:{
                    loader:'html-loader',
                    options:{
                        attrs:['img:src']
                    }
                }
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin('css/[name].css'),
        new HtmlWebpackPlugin({
            chunks:['index'],
            title:'标题',
            hash:true,
            template:'./src/index.html',
            inject:'head',
            filename:'index.html'
            // minify:{
            //     collapseWhitespace:true
            // }
        }),
        // new HtmlWebpackPlugin({
        //     chunks:['detail'],
        //     title:'详情',
        //     hash:true,
        //     template:'./src/detail.html',
        //     inject:'head',
        //     filename:'detail.html'
        //     // minify:{
        //     //     collapseWhitespace:true
        //     // }
        // }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        port:7878,
        hot:true,
        before(){
            
        }
    },
    resolve:{
        alias:{
            'index':'../scss/index.scss',
            'util$':'./util/sum.js'
        }
    },
    devtool:'inline-source-map'
}

/**
 * entry:入口  string | array | object
 * 
 * 单入口：string
 * 
 * output:出口
 * 
 * {
 *      filename:  指定文件名
 * 
 *      path: 指定输出路径         
 * }
 * 
 * loader:加载器
 * 
 * 
 * 
 * 
 * plugins:插件
 * 
 * 
 * */ 