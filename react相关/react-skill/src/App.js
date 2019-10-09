import React from 'react';
import './App.css';

class Console extends React.Component{

  render(){
    console.log(`Console ${this.props.label} is Rendered`);
    return <p>this is Console Component</p>;
  }
}

function Counter(props){
  let [count,setCount] = React.useState(0);
  let incrment = function(){ setCount(count++) }
  return (<div className="App">
            <button onClick={incrment}>this is increment button {count}</button>
            {props.logger}{/*只会执行一次，每次创建一个jsx的时候并且重复使用他的时候，jsx会认为是同一个jsx元素*/}
            <Console label='console' />{/*没次render都会重新创建一个组件，每次创建组件时，react都会重新创建一个props*/}
          </div>)
}


export default Counter;
