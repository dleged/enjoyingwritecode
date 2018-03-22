import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Caculator from './components/Caculator'
import Goods from './components/Goods';
import { connect } from 'react-redux';
import { additive,subtraction } from './action/caculatorAction';
import { updateUser } from './action/userAction';
import { bindActionCreators } from 'redux'

class App extends Component {
  constructor(props){
    super(props);
    this.updateUser = this.updateUser.bind(this);
  }
  updateUser = (e) =>{
    this.props.onUpdateUser(e.target.value);
  }
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
              <input onChange={this.updateUser} defaultValue={this.props.user}/>
              <p>{this.props.user}</p>
              <Caculator value={this.props.caculator.value} additive={this.props.onAdditive} subtraction={this.props.onSubtraction}/>
        </div>
    );
  }
}

// 注入 dispatch 和全局 state
// 不要这样做！这会导致每次 action 都触发整个 TodoApp 重新渲染，你做的所有性能优化都将付之东流。
// 最好在多个组件上使用 connect()，每个组件只监听它所关联的部分 state
const mapStateToProps = state => ({
  user: state.user,
  products: state.products,
  caculator: state.caculator
})

//注入 dispatch 和 userAction
//绑定dispatch的action，返回函数新函数，其实就是执行dispatch(action(...arg))
const mapDispatchToProps = dispatch => ({
  onUpdateUser: bindActionCreators(updateUser,dispatch),
  onAdditive: bindActionCreators(additive),
  onSubtraction: bindActionCreators(subtraction)
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
