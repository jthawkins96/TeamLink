const initialState = {
    isSignedIn: false,
    username: ""
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
    else if(action.type === 'SET_USERNAME') {
        return {
            ...state,
            isSignedIn:true,
            username: action.value
        }
    }

    return state;
}

export default authReducer;