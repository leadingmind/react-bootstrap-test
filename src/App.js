import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header.js';
import FormExample from './component/formexample.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <FormExample/>
      </div>
    );
  }
}

export default App;
