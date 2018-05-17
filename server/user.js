/**
 * 这里是与用户信息有关的数据
 * 与user 相关的拆成一个路由
 */
const express = require('express')
const Router = express.Router()

Router.get('/info',function(rep,res){
    // 校验  用户有没有cookie
    return res.json({code:1})
})

module.exports = Router