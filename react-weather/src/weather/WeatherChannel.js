import React from 'react';
import Forcast from './Forcast';
import CityCondition from './CityCondition';
import BarTool from './BarTool';
export default class weatherChannel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            condition:{
                city:"Brisbane,Au",
                humidity:90,
                windSpeed:9,
                windDirection:"NS",
                temp:{C:26,F:70}
            },
            forcast: [
                {
                day:"Fri",
                time:"13:00",
                high:{C:26,F:70},
                low:{C:20,F:60}
              },
              { day:"Fri",
                  time:"16:00",
                  high:{C:26,F:70},
                  low:{C:20,F:60}}],
                unit:"C",
                curcity:""
                }
                
                
    }
    render(){
        const{condition,forcast,unit}=this.state;
        return(
            <React.Fragment>
            <BarTool/>
            <main>
                <CityCondition data={condition} unit={unit}/>
                <Forcast data={forcast} unit={unit}/>
            </main>
            </React.Fragment>
        )
    }
}