import authReducer from './authReducer';
import initDb from './initDb';

const initialState = {};


const reducers = {
    initDb: initDb,
    authReducer: authReducer
}

export default reducers;