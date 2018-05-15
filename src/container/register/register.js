import React from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'



class Register extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div>
                <Logo></Logo>
                <h1>用户名</h1>
            </div>
        )
    }
}
export default Register