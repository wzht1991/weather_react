import React, { Component } from 'react';
import Header from'./weather/header';
import Footer from './weather/footer'
import './style/main.css';
class App extends Component {
  render() {
    return (
      <div class="weather-channel__container">
      <Header/>
      <Footer/>
      </div>
    );
  }
}

export default App;
