import React, { useState } from 'react';
import IconNavLink from './NavLinks/IconNavLink';
import SignInForm from '../Forms/SignInForm';
import SignUpForm from '../Forms/SignUpForm';
import Modal from '../Modal/Modal';
import { showForm } from './utilityFunctions';


const MainNav = props => {
    const [showModal, toggleModal] = useState(false);
    const [modalTitle, setTitle] = useState(null);
    const [modalContent, setContent] = useState(null);

    let links;
    if(props.isSignedIn) {
        links = <div>
                    <IconNavLink path = "/find-projects" title = "Find Projects" icon = "hammer" iconColor = "secondary" containerBgColor="dark" />
                    <IconNavLink path = "/my-projects" title = "My Projects" icon = "tasks" iconColor = "secondary" containerBgColor="dark" />
                    <IconNavLink path = "/notifications" title = "Notifications" icon = "bell" iconColor = "secondary" containerBgColor="dark" />
                    <IconNavLink path = "/my-profile" title = "My Profile" icon = "user-circle" iconColor = "secondary" containerBgColor="dark" />
                    <IconNavLink path = "/sign-out" title = "Sign Out" icon = "sign-out-alt" iconColor = "secondary" containerBgColor="dark" />
                </div>
    }
    else {
        links = <div>
                    <IconNavLink path="" title = "Sign In" icon = "sign-in-alt" iconColor = "secondary" containerBgColor="dark" click={ () => showForm(<SignInForm />, toggleModal, setTitle, setContent, "Sign In") } />
                    <IconNavLink path="" title = "Sign Up" icon = "user-plus" iconColor = "secondary" containerBgColor="dark" click={ () => showForm(<SignUpForm />, toggleModal, setTitle, setContent, "Sign Up") }/>
                </div>
    }

    return (
        <div id="main-nav" className="d-none d-lg-flex flex-column align-items-center text-secondary bg-dark">
                <IconNavLink path = "/" title = "Home" icon = "home" iconColor = "dark" containerBgColor="secondary" />
                {links}
                {showModal ? <Modal title = {modalTitle} closeModal={() => toggleModal(false)}>{modalContent}</Modal> : null}
        </div>
    );
}

export default MainNav;