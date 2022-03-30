import React, { Component } from 'react';
import MyProvider from "../context/MyContext"
import Family from "./Family";
import "./App.css"

class App extends Component {

  render() {
    return (
      <MyProvider>
        <div className="App">
          <p>I am the app</p>
          <Family />
        </div>
      </MyProvider>
    );
  }
}


export default App;
