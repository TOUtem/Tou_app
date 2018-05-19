import React from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button,Radio} from 'antd-mobile'
import { connect } from 'react-redux'
import { regisger } from '../../redux/user.redux'

@connect(
    state => state.user,
    {regisger}
)

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user:'',
            pwd:'',
            repeatpwd:'',
			type:'genius' //角色boss
        }
        this.handleRegister=this.handleRegister.bind(this);
    }
    handleChange(key,val){
		this.setState({
			[key]:val
		})
	}
    handleRegister(){
        console.log(this.state);
        this.props.regisger(this.state)
    }
    render(){
        const RadioItem = Radio.RadioItem
        return(
            <div>
                <Logo></Logo>
			    {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
                <List>
                    <WingBlank>
                    <InputItem
                        onChange={v=>this.handleChange('user',v)}
                    >用户名</InputItem>
					<WhiteSpace />
                    <InputItem 
                        onChange={v=>this.handleChange('pwd',v)}
                        type='password'>密码</InputItem>
					<WhiteSpace />
                    <InputItem 
                        onChange={v=>this.handleChange('repeatpwd',v)}
                        type='password'>确认密码</InputItem>
					<WhiteSpace />
                    <RadioItem 
                        checked={this.state.type=='genius'}
                        onChange={()=>this.handleChange('type','genius')}
                    >供应商</RadioItem>
                    <RadioItem 
                        checked={this.state.type=='boss'}
						onChange={()=>this.handleChange('type','boss')}
                    >需求商</RadioItem>
					<WhiteSpace />
					<Button type='primary' onClick={this.handleRegister}>注册 </Button>
                    </WingBlank>
				</List>
            </div>
        )
    }
}
export default Register