import React from 'react';
export default function BarTool(props){
  const {curcity,switchTemp,Inputcity,search}=props;
    return(
        <nav>
        <div style={{flex:1}}>
          <input className="search-input" value={curcity} onChange={Inputcity}/>
          <button className="search-btn" onClick={search}><i className="fa fa-search"></i></button>

          <button className="temp-switch" onClick={switchTemp}>
            <i
              className="fa fa-thermometer-empty"
              aria-hidden="true"
              style={{paddingRight:5}}
            ></i>
            <sup>&deg;</sup>C
          </button>
        </div>
      </nav>
    )
}