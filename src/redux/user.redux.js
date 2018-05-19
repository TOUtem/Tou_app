import axios from 'axios'


const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

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
			return {...state,msg:'',isAuth:true,...action.payload}
			break;
		case ERROR_MSG:
		return {...state,msg:action.msg,isAuth:false}
			break;
		default:
			return state
			break;
	}
}

// 注册
export function regisger({user,pwd,repeatpwd,type}){
	console.log('// 注册',user,pwd,repeatpwd,type);
	
	if (!user&&!pwd&&!type) {
		return errorMsg('用户名密码必须输入')
	}
	if (repeatpwd!==pwd) {
		return errorMsg('密码和确认密码不同')
	}
	// 请求放进dispatch
	return dispatch=>{
		axios.post('/user/register',{user,pwd,type})
		.then(res=>{
			if (res.status == 200 && res.data.code === 0) {
				dispatch(regisgerSuccess({user,pwd,type}))
			} else {
				dispatch(errorMsg(res.data.msg))
			}
		})
	}
}

function errorMsg(msg){
	return {type:ERROR_MSG, msg}
}

function regisgerSuccess(data){
	return {type:REGISTER_SUCCESS, payload:data}
}