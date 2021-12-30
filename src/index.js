import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReducerComp from "./useReducer"

ReactDOM.render(
  <ReducerComp initialCount={0}/>,
  document.getElementById('root')
);


