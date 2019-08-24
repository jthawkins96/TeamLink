import * as firebase from 'firebase/app';
import 'firebase/firestore';
import alertify from 'alertifyjs';

export const updateProfile = (name, languages, yoe, closeModal) => {
    return async dispatch => {
        let user = await firebase.firestore().collection('users')
                            .where('username', '==', localStorage.getItem('username'))
                            .get()

        user.docs[0].ref.update({
            name:name,
            languages:languages.split(", "),
            yearsOfExperience:yoe
        })
        .then(() => {
            alertify.notify("Updated profile information.", "success", 3)
            closeModal();
            return dispatch({
                    type:"UPDATE_PROFILE_INFO", 
                    value: {
                        name: name,
                        languages: languages,
                        yoe: yoe
                    }
                });
        })
        .catch(() => {
            alertify.notify("Error updating profile information.", "error", 3)
            return
        })
    }
}