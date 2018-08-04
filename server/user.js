/**
 * 这里是与用户信息有关的数据
 * 与user 相关的拆成一个路由
 */
const express = require('express')
const utils = require('utility')

const Router = express.Router()
const modeles = require('./model')
const User = modeles.getModel('user')
// const Chat = model.getModel('chat')

Router.get('/info',function(rep,res){
    // 校验  用户有没有cookie
    return res.json({code:1})
})

Router.get('/list',function(rep, res){
    // return res.json({code:111})
    // User.find({},function(err, doc){
    User.find({},function(err, doc){
        console.log(doc);
        
        return res.json(doc)
    })
})

// 注册
Router.post ('/register',function(req, res){
    console.log(req.body)
    const {user, pwd, type} = req.body
    
    User.findOne({user},function(err,doc){
		if(doc){
            return res.json({code:1, msg:'用户名重复'})
        }
        User.create({user,type,pwd:md5Pwd(pwd)},function(e, d){
            if (e) {
                return res.json({code:1,msg:'后端出错了'})
            }
            return res.json({code:0})
        })
	})
})



// md5加密
function md5Pwd(pwd){
	const salt = 'imooc_is_good_3957x8yza6!@#DRL~~'
	return utils.md5(utils.md5(pwd+salt))
}

module.exports = Router