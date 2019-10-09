import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function Logger(props){
  console.log(`Logger ${props.label} is Rendered`);
  return <p>this is Logger Component</p>;
}


ReactDOM.render(
  <App logger = {<Logger label='counter' />}/>,
  document.getElementById('root')
);
