import React from 'react';
import Forcast from './Forcast';
import CityCondition from './CityCondition';
import BarTool from './BarTool';
import {searchUrl} from '../APi/weather';
export default class weatherChannel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            condition:{
                description:"",
                humidity:"",
                windSpeed:"",
                windDirection:"",
                temp:{C:"",F:""}
            },
            forcast: [
                {
                    time:"13:00",
                    high:{C:"",F:""},
                    low:{C:"",F:""}
                  },
                  { 
                      time:"14:00",
                      high:{C:"",F:""},
                      low:{C:"",F:""}
                    },
                    { 
                        time:"15:00",
                        high:{C:"",F:""},
                        low:{C:"",F:""}
                      },
                      { 
                        time:"16:00",
                        high:{C:"",F:""},
                        low:{C:"",F:""}
                      },
                      { 
                        time:"17:00",
                        high:{C:"",F:""},
                        low:{C:"",F:""}
                      }
                ],
                unit:"C",
                curcity:"",
                country:""
                }
                
            
    }
  //   做一个点一下就能转换C和Ffunction： switchTemp
  switchTemp(){
      if(this.state.unit==="C"){
          this.setState({unit:"F"});
      } else{
          this.setState({unit:"C"});
      }
  }
  //input (测试的时候要setstate 不然只有设置了value的话 input 里面打印不出任何东西)
  Inputcity(city){
       this.setState({curcity: city.target.value});
  }
  search(){
      searchUrl(this.state.curcity).then(data=>{
          this.setState({condition:data.condition});
          this.setState({forcast:data.forcast});
          this.setState({curcity:data.curcity});
          this.setState({country:data.country});

      });
  }
    render(){
        const{curcity,country,condition,forcast,unit}=this.state;
        return(
            <React.Fragment>
            <BarTool  curcity={curcity} Inputcity={event=>{
                this.Inputcity(event);
            }} 
            switchTemp={()=>{
                this.switchTemp()
            }}
            search={
                ()=>{
                    this.search();
                }
            }
            />
            <main>
                <CityCondition curcity={curcity} country={country} data={condition} unit={unit}/>
                <section className="weather-forecast">
                {forcast.map((item)=>(
                   <Forcast key={item.time} time={item.time}  high={item.high} low={item.low} unit={unit}/>
                ))}
                </section>
            </main>
            </React.Fragment>
        )
    }
}