import React, { Component } from 'react';
import Header from'./weather/header';
import Footer from './weather/footer';
import WeatherChannel from './weather/WeatherChannel';
import './style/main.css';
class App extends Component {
  render() {
    return (
      <div className="weather-channel__container">
      <Header/>
      <WeatherChannel/>
      <Footer/>
      </div>
    );
  }
}

export default App;
