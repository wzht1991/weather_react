const initial_state={
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
        high:{C:30,F:70},
        low:{C:20,F:60}
      },
      { day:"TUE",
          time:"16:00",
          high:{C:26,F:70},
          low:{C:20,F:60}
        }
      ]
    };
    const WeatherReducer=(state=initial_state,action)=>{
        switch (action.type) {
            default:
                return state;
        }
    };
   
    export default WeatherReducer;