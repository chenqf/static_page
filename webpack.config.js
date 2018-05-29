const fs = require('fs');
const path = require('path');
const resolve = path.resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('[name].css');
// const extractBaseCSS = new ExtractTextPlugin('base.css');
const util = require('files-tree');
const entry = {};
const plugins = [extractCSS];
initEntry(entry);
initPlugins(plugins);
module.exports = {
    devtool: 'source-map',
    entry: entry,
    plugins,
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: `${__dirname}/build`,
        filename: '[name].js'//将app文件夹中的两个js文件合并成build目录下的bundle.js文件
    },
    devServer: {
        historyApiFallback: true,
        contentBase: __dirname,
        compress: true,
        port: 8080,
        inline: true,
        host: '0.0.0.0',
        disableHostCheck: true,
        public: '10.13.1.93'
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        "presets":[
                            "react",
                            'es2015',
                        ],
                        "plugins": [
                            "transform-object-assign",//Object.assign
                            'transform-object-rest-spread',// ... 运算符
                        ]
                    }
                },
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: extractCSS.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                config: {
                                    path: 'postcss.config.js'
                                }
                            }
                        },
                        {
                            loader: 'sass-loader', options: {sourceMap: true}
                        }
                    ]
                })
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: 'postcss.config.js'
                            }
                        }
                    },
                    {
                        loader: 'sass-loader', options: {sourceMap: true}
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: ['file-loader?name=static/images/[name].[ext]']
            }
        ],
    },
    resolve: {
        // root: __dirname, //绝对路径
        extensions: [ '.js', 'jsx','.json', '.scss'],
        alias: {
            'style': resolve(__dirname,'style/index'),
            'jd': resolve(__dirname,'style/jd/index'),
            'apps': resolve(__dirname,'apps')
        }
    },
};
function initPlugins(plugins) {
    util.allFile(`./apps`).forEach((item) => {
        if (item.path.indexOf('.html') >= 0) {
            plugins.push(new HtmlWebpackPlugin({
                minify: { //压缩HTML文件
                    removeComments: true, //移除HTML中的注释
                    collapseWhitespace: true //删除空白符与换行符
                },
                template: item.path,
                chunks: [item.path.replace(/\.\/apps\/(.*)\.html$/, '$1')],
                filename: item.path.replace('./apps/', '')
            }))
        }
    })
}
function initEntry(entry) {
    util.allFile(`./apps`).forEach((item) => {
        if (item.path.indexOf('.js') >= 0) {
            let p = item.path.replace(/\.\/apps\/(.*)\.js$/, '$1');
            //增加业务入口js
            entry[p] = item.path;
        }
    })
}