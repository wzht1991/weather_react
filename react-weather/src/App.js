import React, { Component } from 'react';
import Header from'./weather/header';
import './style/main.css';
class App extends Component {
  render() {
    return (
      <div class="weather-channel__container">
      <Header/>
      </div>
    );
  }
}

export default App;
