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
        inline: true //注意：不写hot: true，否则浏览器无法自动更新；
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.json/,
                loader: 'json-loader'
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
        extensions: [ '.js', '.json', '.scss'],
        alias: {
            'style': resolve(__dirname,'apps/base'),
            'apps': resolve(__dirname,'apps'),
            'phone': resolve(__dirname,'apps/phone'),
            'pc': resolve(__dirname,'apps/pc'),
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