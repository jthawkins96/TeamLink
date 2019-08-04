import alertify from 'alertifyjs';
import * as firebase from 'firebase/app'
import 'firebase/firebase-auth';

export const signIn = (email, password, callback) => {
    return async dispatch => {
        let success = false;
        try {
            success = await firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    callback();
                    return true;
                })
                .catch((error) => {
                    alertify.notify('Invalid username or password.', 'error', 3)
                    return false;
                });
        }
        catch {
            alertify.notify('error', 'Unable to connect to the database.', 3)
        }
        if (success) {
            localStorage.setItem('lastLoggedIn', new Date().toUTCString())
            localStorage.setItem('username', email.split('@')[0])
            return dispatch({ type: 'USER_SIGNED_IN' });
        }
        else
            return;
    }
}

export const signUp = (email, password, callback) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            alertify.notify('Account successfully created!', 'success', 3)
            callback()
        })
        .catch(error => {
            if(error.code === 'auth/email-already-in-use')
                alertify.notify('Account with that email already exists.', 'error', 3)
            else
                alertify.notify('Unable to create account.', 'error', 3)
        });
}

export const signOut = () => {
    return dispatch => {
        firebase.auth().signOut()
            .catch(error => {
                alertify.notify('Error logging out of firebase.', 'error', 3)
            });
        return dispatch({ type: 'USER_SIGNED_OUT' })
    }
}