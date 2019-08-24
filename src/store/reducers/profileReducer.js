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

    return state;
}

export default profileReducer;