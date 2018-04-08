const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack=require('webpack');
const util = require('files-tree');
const entry = {};
const plugins = [new webpack.HotModuleReplacementPlugin()];
checkFiles(util.tree(`./apps`));
initEntry(entry);
initPlugins(plugins);

module.exports = {
    entry:{'index':'./apps/index.js'},
    plugins,
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: `${__dirname}/build`,
        filename: '[name].js'//将app文件夹中的两个js文件合并成build目录下的bundle.js文件
    },
    devServer: {
        historyApiFallback: true,
        inline: true //注意：不写hot: true，否则浏览器无法自动更新；
    }

};

function initPlugins(plugins) {
    util.allFile(`./tpl`).forEach((item)=>{
        plugins.push(new HtmlWebpackPlugin({
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: true //删除空白符与换行符
            },
            template: item.path,
            // chunks: ['vendor', 'tg', path],
            filename: item.path.replace('./tpl/','')
        }))
    })


}

function initEntry(entry){
    util.allFile(`./apps`).forEach((item)=>{
        let p = item.path.replace(/\.js$/, '');
        //增加业务入口js
        entry[p] = item.path;
    })
}

function checkFiles(jsList) {
    jsList.forEach(function (item) {
        if(item.directory){
            //查看tpl里是否有此文件夹，没有创建
            let p = item.path.replace('apps','tpl');
            if(!fs.existsSync(p)){
                fs.mkdirSync(p);
            }
            checkFiles(item.list);
        }else if(item.file){
            //查看tpl里是否有此文件，没有创建
            let p = item.path.replace(/(.*)apps(.*)js/,'$1tpl$2html');
            if(!fs.existsSync(p)){
                let readStream = fs.createReadStream(path.join(__dirname, './base.tpl.html'));
                let writeStream = fs.createWriteStream(path.join(__dirname, p));
                readStream.pipe(writeStream);
            }

        }
    })
}