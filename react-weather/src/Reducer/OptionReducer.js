import {Change_City,Change_TEMP_Unit} from "../Actions/ActionType";
const initial_state= {
        unit:"C",
        Current_City:"Brisbane"
};
const OptionReducer=(state=initial_state,action)=>{
    switch (action.type) {
        case Change_City:
         return {...state, Current_City:action.Current_City};
         case Change_TEMP_Unit:
         return {...state, unit:action.unit};    
        default:
         return state;
    }
};
export default OptionReducer;