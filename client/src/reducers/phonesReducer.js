import {FETCH_PHONES} from "../actions/types";
import _ from 'lodash';


export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_PHONES:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        default:
            return state;
    }
};
