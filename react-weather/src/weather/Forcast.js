import React from 'react';
export default function forcast(props){
    const{time,high,low,unit}=props;
    return(
        // <section className="weather-forecast">
        //   <div className="forecast__switch">
        //     <button className="forecast__switch_0 switch-active">5 items</button>
        //     <button className="forecast__switch_1">10 items</button>
        //   </div>

          <div className="weather-forecast__row">
            <span className="weather-forecast__icon">
               {time}
            </span>
            <span className="weather-forecast__high">{high[unit]} {unit}</span>
            <span className="weather-forecast__low">{low[unit]} {unit}</span>
          </div>
        // </section>
    )
}