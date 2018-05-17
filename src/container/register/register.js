import React from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button,Radio} from 'antd-mobile'

const RadioItem = Radio.RadioItem


class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
			type:'genius' // 或者boss

        }
        this.handleRegister=this.handleRegister.bind(this);
    }
    handleChange(key,val){
		this.setState({
			[key]:val
		})
	}
    handleRegister(){
        this.props.regisger(this.state)
    }
    render(){
        return(
            <div>
                <Logo></Logo>
                <list>
                    <InputItem>用户名</InputItem>
					<WhiteSpace />
                    <InputItem type='password'>密码</InputItem>
					<WhiteSpace />
                    <InputItem type='password'>确认密码</InputItem>
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
                </list>
            </div>
        )
    }
}
export default Register