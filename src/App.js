import React from 'react'
// import { connect } from './woniu-react-redux'
import { addGun} from './index.redux'

class App extends React.Component{
  render(){
    return (
      <div>
        <h2>开始吧啊</h2>
        <button onClick={()=>{this.props.store.dispatch(addGun())}}>申请武器</button>
      </div>
    ) 
  }
}
export default App;
