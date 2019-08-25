const initialState = {
    userProfile: {}
}

const profileReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_PROFILE_INFO') {
        return {
            userProfile: {
                ...action.userProfile
            }
        }
    }
    else if(action.type === 'SET_PROFILE') {
        return {
            userProfile: action.value
        }
    }

    return state;
}

export default profileReducer;