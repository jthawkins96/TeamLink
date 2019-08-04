import React, { useState } from 'react';
import IconNavLink from './NavLinks/IconNavLink';
import SignInForm from '../Forms/SignInForm';
import SignUpForm from '../Forms/SignUpForm';
import Modal from '../Modal/Modal';
import showForm from '../../utility/showForm';
import { signOut } from '../../store/actions/auth';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const MainNav = props => {
    const [showModal, toggleModal] = useState(false);
    const [modalTitle, setTitle] = useState(null);
    const [modalContent, setContent] = useState(null);

    return (
        <div id="main-nav" className="d-none d-lg-flex flex-column align-items-center text-secondary bg-dark">
            <IconNavLink path="/" title="Home" icon="home" iconColor="dark" classes="bg-secondary d-flex" />
            <IconNavLink path="/find-projects" title="Find Projects" icon="hammer" iconColor="secondary" classes={`${props.isSignedIn ? "d-flex" : "d-none"} bg-dark`} />
            <IconNavLink path="/my-projects" title="My Projects" icon="tasks" iconColor="secondary" classes={`${props.isSignedIn ? "d-flex" : "d-none"} bg-dark`} />
            <IconNavLink path="/notifications" title="Notifications" icon="bell" iconColor="secondary" classes={`${props.isSignedIn ? "d-flex" : "d-none"} bg-dark`} />
            <IconNavLink path="/my-profile" title="My Profile" icon="user-circle" iconColor="secondary" classes={`${props.isSignedIn ? "d-flex" : "d-none"} bg-dark`} />
            <IconNavLink click={ () => { props.signOut(); props.history.push('/'); } } path="" title="Sign Out" icon="sign-out-alt" iconColor="secondary" classes={`${props.isSignedIn ? "d-flex" : "d-none"} bg-dark`} />

            <IconNavLink path="" title="Sign In" icon="sign-in-alt" iconColor="secondary" classes={`${props.isSignedIn ? "d-none" : "d-flex"} bg-dark`} click={() => showForm(<SignInForm close={() => toggleModal(false)} />, toggleModal, setTitle, setContent, "Sign In")} />
            <IconNavLink path="" title="Sign Up" icon="user-plus" iconColor="secondary" classes={`${props.isSignedIn ? "d-none" : "d-flex"} bg-dark`} click={() => showForm(<SignUpForm close={() => toggleModal(false)} />, toggleModal, setTitle, setContent, "Sign Up")} />
            {showModal ? <Modal title={modalTitle} closeModal={() => toggleModal(false)}>{modalContent}</Modal> : null}
        </div>
    );
} 

const mapActionToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapActionToProps)(withRouter(MainNav));