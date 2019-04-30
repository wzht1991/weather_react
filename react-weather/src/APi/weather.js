import axios from 'axios';
const BASE_URL="http://localhost:3002/weather/";
export function searchUrl(city){
    return axios
    .get(`${BASE_URL}${city}`)
    .then(response=>{
       return {
        condition:{
            description:response.data.currentWeather.description,
            humidity: response.data.currentWeather.humidity,
            windSpeed:response.data.currentWeather.windspeed,
            windDirection:response.data.currentWeather.winddirection,
            temp:{
                C:response.data.currentWeather.tempCelsius,
                F:response.data.currentWeather.tempFahrenheit
            }
        },
        forcast: [
            {
            time:response.data.ForcastWeather[0].time,
            high:{
                C:response.data.ForcastWeather[0].temp_max_C,
                F:response.data.ForcastWeather[0].temp_max_F
            },
            low:{
                C:response.data.ForcastWeather[0].temp_min_C,
                F:response.data.ForcastWeather[0].temp_min_F
            }
          },
          { 
            time:response.data.ForcastWeather[1].time,
              high:{
                C:response.data.ForcastWeather[1].temp_max_C,
                F:response.data.ForcastWeather[1].temp_max_F
            },
              low:{
                  C:response.data.ForcastWeather[1].temp_min_C,
                  F:response.data.ForcastWeather[1].temp_min_F
                }
            },
            { 
                time:response.data.ForcastWeather[2].time,
                high:{
                    C:response.data.ForcastWeather[2].temp_max_C,
                    F:response.data.ForcastWeather[2].temp_max_F
                },
                low:{
                    C:response.data.ForcastWeather[2].temp_min_C,
                    F:response.data.ForcastWeather[2].temp_min_F
                }
              },
              { 
                time:response.data.ForcastWeather[3].time,
                high:{
                    C:response.data.ForcastWeather[3].temp_max_C,
                    F:response.data.ForcastWeather[3].temp_max_F
                },
                low:{
                    C:response.data.ForcastWeather[3].temp_min_C,
                    F:response.data.ForcastWeather[3].temp_min_F
                }
              },
              { 
                time:response.data.ForcastWeather[4].time,
                high:{
                    C:response.data.ForcastWeather[4].temp_max_C,
                    F:response.data.ForcastWeather[4].temp_max_F
                },
                low:{
                    C:response.data.ForcastWeather[4].temp_min_C,
                    F:response.data.ForcastWeather[4].temp_min_F
                }
              }

            ],
            unit:"C",
            curcity:response.data.currentWeather.name,
            country:response.data.currentWeather.country
            }
            
       })
    }
