import React, { Component } from 'react';
import store from './store';
import{Provider} from 'react-redux';
import Header from'./weather/header';
import Footer from './weather/footer';
import WeatherChannel from './weather/WeatherChannel';
import WeatherChannelRedux from './weather/WeatherChannelRedux';
import './style/main.css';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="weather-channel__container">
      <Header/>
      <WeatherChannel/>
      {/* <WeatherChannelRedux/> */}
      <Footer/>
      </div>
      </Provider>
    );
  }
}

export default App;
