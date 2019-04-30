import React from 'react';
import{connect} from 'react-redux';
import Forcast from './Forcast';
import CityCondition from './CityCondition';
import BarTool from './BarTool';
class WeatherChannelRedux extends React.Component{   
    render(){
        const{condition,forcast,unit}=this.props;
        return(
            <React.Fragment>
            <BarTool switchTemp={()=>{
                this.switchTemp()
            }}/>
            <main>
                <CityCondition data={condition} unit={unit}/>
                <section className="weather-forecast">
                 <div className="forecast__switch">
                   <button className="forecast__switch_0 switch-active">5 items</button>
                   <button className="forecast__switch_1">10 items</button>
                 </div>
                {forcast.map((item)=>(
                   <Forcast key={item.day} day={item.day} time={item.time}  high={item.high} low={item.low} unit={unit}/>
                ))}
                </section>
            </main>
            </React.Fragment>
        );
    } 
   
}
 const mapStateToprops=(state)=>{
     return {
        //  Weather_data 这个是在reducer 文件夹下面 index.js 中定义的
          condition: state. Weather_data.condition,
          forcast: state. Weather_data.forcast,
          unit: state.Option_data.unit
     }
 }
 export default connect(mapStateToprops)(WeatherChannelRedux);