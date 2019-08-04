const initialState = {
    bgClass: 'home-bg'
}

const bgClassReducer = (state = initialState, action) => {
    if(action.type === 'CHANGE_BACKGROUND') {
        return {
            ...state,
            bgClass: action.value
        }
    }

    return state;
}

export default bgClassReducer;