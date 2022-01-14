import phoneService from "../services/phone-service";
import {FETCH_PHONES, PHONE_SELECTED} from "./types";

export const selectPhone = (phone) => {
    return {
        type: PHONE_SELECTED,
        payload: phone
    };
};

export const fetchPhones = () => async dispatch => {
    const response = await phoneService.get('/phones');

    dispatch({type: FETCH_PHONES, payload: response.data});
};
