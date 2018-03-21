import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Caculator from './components/Caculator'
import Goods from './components/Goods';
import { connect } from 'react-redux';
import { additive,subtraction } from './action/caculatorAction';
import { updateUser } from './action/userAction';

class App extends Component {
  constructor(props){
    super(props);
    this.updateUser = this.updateUser.bind(this);
  }
  updateUser = (e) =>{
    this.props.onUpdateUser(e.target.value);
  }
  render() {
    this.props.dispatch({type:'user:UPDATEUSER',payload:{user: 'sunmmer'}})
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
              <input ref={(e)=>{this.dom = e.target}} onChange={this.updateUser} defaultValue={this.props.user}/>
              <p>{this.props.user}</p>
              <Caculator value={this.props.caculator.value} additive={this.props.onAdditive} subtraction={this.props.onSubtraction}/>
        </div>
    );
  }
}


const mapStateToProps = state => ({
  user: state.user,
  products: state.products,
  caculator: state.caculator
})
const mapDispatchToProps = state => ({
  onUpdateUser: updateUser,
  onAdditive: additive,
  onSubtraction: subtraction
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
