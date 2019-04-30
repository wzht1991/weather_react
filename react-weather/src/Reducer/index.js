import {combineReducers} from "redux";
import WeatherReducer from "./WeatherReducer";
import OptionReducer from "./OptionReducer";
export default combineReducers({
    Weather_data: WeatherReducer,
    Option_data:OptionReducer
});