import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { firebaseConfig } from './firebase-config';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './store/reducers/reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './content/css/main.css';

firebase.initializeApp(firebaseConfig);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth: reducers.authReducer,
    bgClass: reducers.bgClassReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const lastLoggedIn = localStorage.getItem('lastLoggedIn')
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() - 7);

let username = "";
let userSignedInFromCookie = false;

if(lastLoggedIn && new Date(lastLoggedIn) >= currentDate) {
    localStorage.setItem('lastLoggedIn', new Date().toUTCString())
    username = localStorage.getItem('username');
    userSignedInFromCookie = true;
}

ReactDOM.render(<Provider store={store}><App userSignedInFromCookie = {userSignedInFromCookie} username = {username} /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
