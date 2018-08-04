import axios from 'axios'
import {getRedirectPath} from '../util'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOGIN_SUCESS = 'LOGIN_SUCESS'

// 初始值
const initState={
	isAuth:false,
	msg:'',
	user:'',
	pwd:'',
	tytpe:''
}

// reducer 
export function user(state=initState, action){
	switch (action.type) {
		case REGISTER_SUCCESS:
			return {...state,msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload}
			break;
		case LOGIN_SUCESS:
			return {...state, msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload}
			break;
		case ERROR_MSG:
		return {...state,msg:action.msg,isAuth:false}
			break;
		default:
			return state
			break;
	}
}
//****************************** 


// 注册
export function regisger({user,pwd,repeatpwd,type}){
	console.log('// 注册',user,pwd,repeatpwd,type);
	
	if (!user&&!pwd) {
		return errorMsg('用户名密码必须输入')
	}
	if (repeatpwd!==pwd) {
		return errorMsg('密码和确认密码不同')
	}
	// 请求放进dispatch//异步的写法
	return dispatch=>{
		axios.post('/user/register',{user,pwd,type})
		.then(res=>{
			if (res.status == 200 && res.data.code === 0) {
				dispatch(regisgerSuccess({user,pwd,type}))
			} else {
				dispatch(errorMsg(res.data.msg))
			}
		})
		.catch(function (error) {
			console.log(error);
		  });
	}
}

// 登录
export function login({user,pwd}){
	if (!user||!pwd) {
		return errorMsg('用户密码必须输入')
	}
	return dispatch=>{
		axios.post('/user/login',{user,pwd})
			.then(res=>{
				if (res.status==200&&res.data.code===0) {
					// dispatch(registerSuccess({user,pwd,type}))
					dispatch(loginSuccess(res.data.data))
				}else{
					dispatch(errorMsg(res.data.msg))
				}
			})		
	}


}

function loginSuccess(data){
	return { type:LOGIN_SUCESS , payload:data}
}

function errorMsg(msg){
	return {type:ERROR_MSG, msg}
}

function regisgerSuccess(data){
	return {type:REGISTER_SUCCESS, payload:data}
}