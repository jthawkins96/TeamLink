const initDb = dbContext => {
    const initialState = {
        context: dbContext
    }

    return (state = initialState, action) => {
        return state;
    }
}

export default initDb;