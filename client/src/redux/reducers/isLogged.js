const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            //return !state;
            return true;
        default:
            return state
    }
}

export default loggedReducer;