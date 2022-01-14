import {combineReducers} from 'redux';
import phonesReducer from "./phonesReducer";
import {selectedPhoneReducer} from "./selectedReducer";


export default combineReducers({
    phones: phonesReducer,
    selectedPhone: selectedPhoneReducer,
});
