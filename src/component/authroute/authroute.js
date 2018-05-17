import React from 'react'
import axios from 'axios'
// 检测路由
class AuthRoute extends React.Component{


    componentDidMount(){
        // 获取用户信息
        axios.get('/user/info').
        then(res=>{
            if (res.status==200) {
                console.log(res.data);
                
            }
        })
        // 逻辑：
		// 是否登录
		// 现在的url地址  login是不需要跳转的

		// 用户的type 身份是boss还是牛人
		// 用户是否完善信息（选择头像 个人简介）
    }
    render(){
        return <p>22222</p>
    }
}

export default AuthRoute
