import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import SignInForm from '../../components/Forms/SignInForm';

const Home = props => {
    const [showModal, toggleModal] = useState(false);

    return (
        <div id="home-container" className="mb-3 d-flex flex-column justify-content-center">
            <h3>Find Your Team With TeamLink</h3>
            <p className="w-50 my-3">Working on a project and need a team quick? TeamLink will help you find the perfect teammates to get the job done.</p>
            <div id="home-buttons-container" className="d-flex justify-content-center my-3 flex-column flex-md-row">
                <button onClick = { () => navigateToPage(props.isSignedIn, props.history, '/my-projects', toggleModal) } className="btn btn-primary mr-md-1 mb-1 mb-md-0">Create New Project</button>
                <button onClick = { () => navigateToPage(props.isSignedIn, props.history, '/find-projects', toggleModal) } className="btn btn-secondary ml-md-1 mt-1 mt-md-0">Join a Team</button>
            </div>
            {showModal ? <Modal title="Sign In" closeModal={() => toggleModal(false)}><SignInForm close={() => toggleModal(false)} /></Modal> : null}
        </div>
    );
}

function navigateToPage(isSignedIn, history, path, toggleModal) {
    if(isSignedIn) 
        history.push(path)
    else
        toggleModal(true)
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps)(withRouter(Home));