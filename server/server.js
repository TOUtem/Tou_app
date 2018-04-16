const express = require('express')
// // 新建app
const app = express()
// 登录入口
app.get('/',function(req,res){
    res.send('<h1>Hellow  DRL </h1>')
})
app.get('/data',function(req,res){
    res.json({name:'aaaa',type:'IT'})
})

app.listen(9093,function () {
    console.log('localhost: 9093')
})