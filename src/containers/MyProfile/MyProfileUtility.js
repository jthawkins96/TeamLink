import * as firebase from 'firebase/app'
import 'firebase/firestore';

async function setProfileData(setProfile) {
    let profiles = await firebase.firestore().collection('users').where('username', '==', localStorage.getItem('username')).get();
    let profile = profiles.docs.map(doc => doc.data())[0]
    setProfile(profile.name, profile.languages.join(', '), profile.yearsOfExperience)
}

const utilityFns = {
    setProfileData: setProfileData
}

export default utilityFns;