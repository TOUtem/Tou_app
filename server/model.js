// 链接mongo

const mongoose = require('mongoose')
const Schema =  mongoose.Schema
// 链接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/tou-chat'
// mongoose.connect(DB_URL)
mongoose.connect(DB_URL, { useMongoClient: true })
// 定义一个模型
const models = {
    // 个人信息
    user:{
        user:{type:String, requier:true},
        pwd:{type:String, requier:true},
        'type':{'type':String, 'requier':true}
    },
    num:{}
}

// 批量动态生成model
for(let m in models){
    // console.log(m);
	mongoose.model(m, new Schema(models[m]))
}


getModel=function(name){
    console.log('11111111');
    console.log(mongoose.model(name));
    // 读取模块
    return mongoose.model(name)
}


module.exports = {getModel}
