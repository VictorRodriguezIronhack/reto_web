const {PHONE_SELECTED} = require("../actions/types");

export const selectedPhoneReducer = (selectedPhone=null, action) => {
    if (action.type === PHONE_SELECTED) {
        return action.payload;
    }
    return selectedPhone;
};

