import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
@withRouter


// 检测路由
class AuthRoute extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const publiclist = ['/login','/register']
        const pathname = this.props.location.pathname
        console.log(this.props);
        if(publiclist.indexOf(pathname) > -1){
            return null
        }
        // 获取用户信息
        axios.get('/user/info')
        .then(res=>{
            if (res.status==200) {
                console.log(res.data);
                if (res.data.code == 0) {//有用户信息
                    return 
                } else {
                    this.props.history.push('/login')
                }
                
            }
        })
        // 逻辑：
		// 是否登录
		// 现在的url地址  login是不需要跳转的

		// 用户的type 身份是boss还是牛人
		// 用户是否完善信息（选择头像 个人简介）
    }
   
    render(){
        return null
    }
}

export default AuthRoute
