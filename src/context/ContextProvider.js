import React, { Component } from 'react'
import MyContext from './context';

class ContextProvider extends Component {
  state = {
    profile:{
      username: "Francis",
      lastname: "Jones",
      age: 20
    }
  }
  render() {
    return (
      <MyContext.Provider value={{profile:this.state.profile}}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
export default ContextProvider;