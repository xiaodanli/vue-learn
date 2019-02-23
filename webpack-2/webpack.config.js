const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWepackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry:{
        index:'./src/js/index.js'
        // detail:'./src/js/detail.js'
    },
    output:{
        filename:'js/[name].js',
        path:path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','sass-loader']
                })
            },
            {
                test:/\.(jpg|png|gif|svg)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:1234,
                        name:'imgs/[name].[ext]',
                        publicPath:'/'
                    }
                    
                }
            },
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets: ['@babel/preset-env']
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
        new ExtractTextPlugin({
            filename:'css/[name].css',
            disable:true
        }),
        new HtmlWepackPlugin({
            chunks:['index'],
            template:'./src/index.html',
            // inject:'head',
            title:'首页',
            filename:'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
        // new HtmlWepackPlugin({
        //     chunks:['detail'],
        //     template:'./src/detail.html',
        //     // inject:'head',
        //     title:'详情',
        //     filename:'detail.html'
        // })
    ],
    devServer:{
        port:7878,
        host:'localhost',
        hot:true,
        before(app){
            app.get('/api/list',(req,res) => {
                const data = require('./mock/data.json');
                res.json({code:1,data:data})
            })
        },
        proxy:{
            '/classify':'http://localhost:3000'
        }
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.min.js',
            'reverse$':'./reverse.js'
        }
    }
}
