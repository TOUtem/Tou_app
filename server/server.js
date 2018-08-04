const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
// const model = require('./model')
// const Chat = model.getModel('chat')


const userRouter = require('./user')  //指定一个user路由

const app = express()
// 参数解析
app.use(cookieParser())
app.use(bodyParser.json()) //解析json

app.use('/user',userRouter)
// app.use  == 开启一个中间件，与user相关的子路由都在userRouter里面
app.listen(9093,function () {
    console.log('Node app start at port 9093')
})