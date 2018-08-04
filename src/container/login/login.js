import React from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import { connect } from 'react-redux'
import { regisger } from '../../redux/user.redux'
import {login} from '../../redux/user.redux'

@connect(
    state => state.user,
    {login}
)
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
                    <WhiteSpace />
                    <Button onClick={this.handleLogin} type='primary'>登录</Button>
                    <WhiteSpace />
                    <Button onClick={this.register} type='primary'>注册</Button>
                </WingBlank>
            </div>
        )
    }
}
export default Login