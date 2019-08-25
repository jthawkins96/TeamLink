import React, { useState, useEffect } from 'react';
import Modal from '../../components/Modal/Modal';
import EditProfileForm from '../../components/Forms/EditProfileForm';
import { connect } from 'react-redux';
import { updateProfile } from '../../store/actions/updateProfile';
import utilityFns from './MyProfileUtility';

const MyProfile = props => {

    useEffect(() => {
        utilityFns.setProfileData(props.setProfile)
    }, [])

    const [showModal, toggleModal] = useState();

    let modalTitle = "Edit Profile";
    let modalContent = <EditProfileForm profile={props.profile} updateProfile={props.updateProfile} close={() => toggleModal(false)} />

    let modal = showModal ? <Modal title={modalTitle} closeModal={() => toggleModal(false)}>{modalContent}</Modal> : null;

    return (
        <div id="my-profile-container" className="d-flex justify-content-center align-items-center my-5">
            <div className="row w-75 justify-content-center d-flex h-100 shadow border rounded">
                <div className="col-md-6 d-flex flex-column align-items-center bg-dark py-md-5 pt-3 text-secondary">
                    <div className="border rounded-circle circle-container d-flex align-items-center justify-content-center">
                    </div>
                    <h4>{props.profile.name}</h4>
                    <button className="btn btn-secondary" onClick={() => toggleModal(true)}>Edit Profile</button>
                </div>
                <div className="col-md-6 d-flex flex-column align-items-center py-md-5 pt-3">
                    <div className="border rounded-circle circle-container-large d-flex flex-column align-items-center justify-content-center">
                        <h3>3</h3>
                    </div>
                    <span>Number of Projects</span>
                </div>
            </div>

            {modal}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        profile: state.profile.userProfile
    }
}

const mapActionToProps = dispatch => {
    return {
        setProfile: (name, languages, yoe) => dispatch({type:'SET_PROFILE', value:{ name: name, languages: languages, yoe: yoe }}),
        updateProfile: (name, languages, yoe, closeModal) => dispatch(updateProfile(name, languages, yoe, closeModal))
    }
}

export default connect(mapStateToProps, mapActionToProps)(MyProfile);