const initialState = {
    isSignedIn: false
}

const authReducer = (state = initialState, action) => {
    if(action.type === 'USER_SIGNED_IN') {
        return {
            ...state,
            isSignedIn: true
        }
    }
    
    else if(action.type === 'USER_SIGNED_OUT') {
        return {
            ...state,
            isSignedIn: false
        }
    }

    return state;
}

export default authReducer;