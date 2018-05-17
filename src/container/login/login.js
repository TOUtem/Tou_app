import React from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'


class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
			user:'',
			pwd:''
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.register = this.register.bind(this);
    }
    handleLogin(){
		this.props.login(this.state)
    }
    register(){
		this.props.history.push('/register')
	}
    render(){
        return(
            <div>
                <Logo></Logo>
                <WingBlank>
                <InputItem onChange={()=>{}}>用户</InputItem>
				<WhiteSpace />
                <InputItem onChange={()=>{}}>密码</InputItem>
                </WingBlank>
                <WhiteSpace />
                <Button onClick={this.handleLogin} type='primary'>登录</Button>
                <WhiteSpace />
                <Button onClick={this.register} type='primary'>注册</Button>
            </div>
        )
    }
}
export default Login