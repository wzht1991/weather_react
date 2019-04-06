import React from 'react';
export default function forcast(props){
    const{data,unit}=props;
    return(
        <section className="weather-forecast">
          <div className="forecast__switch">
            <button className="forecast__switch_0 switch-active">5 items</button>
            <button className="forecast__switch_1">10 items</button>
          </div>

          <div className="weather-forecast__row">
            <span className="weather-forecast__day">{data[0].day}</span>
            <span className="weather-forecast__icon">
              <i className="fa fa-clock-o"></i> {data[0].time}
            </span>
            <span className="weather-forecast__high">{data[0].high[unit]} {unit}</span>
            <span className="weather-forecast__low">{data[0].low[unit]} {unit}</span>
          </div>
          <div className="weather-forecast__row">
            <span className="weather-forecast__day">{data[1].day}</span>
            <span className="weather-forecast__icon">
              <i className="fa fa-clock-o"></i> {data[1].time}
            </span>
            <span className="weather-forecast__high">{data[1].high[unit]} {unit}</span>
            <span className="weather-forecast__low">{data[1].low[unit]} {unit}</span>
          </div>

          <div className="weather-forecast__row">
            <span className="weather-forecast__day">{data[0].day}</span>
            <span className="weather-forecast__icon">
              <i className="fa fa-clock-o"></i>  {data[0].time}
            </span>
            <span className="weather-forecast__high">{data[0].high[unit]} {unit}</span>
            <span className="weather-forecast__low">{data[0].low[unit]} {unit}</span>
          </div>
        </section>
    )
}