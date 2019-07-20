import React, { useState } from 'react';
import MobileNavLink from './NavLinks/MobileNavLink';
import NavBrand from './NavBrand/NavBrand';
import SignInForm from '../Forms/SignInForm';
import SignUpForm from '../Forms/SignUpForm';
import Modal from '../Modal/Modal';
import { showForm } from './utilityFunctions';

const MobileNav = props => {
    const [showModal, toggleModal] = useState(false);
    const [modalTitle, setTitle] = useState(null);
    const [modalContent, setContent] = useState(null);
    const { innerHeight: windowHeight } = window;

    let links;
    if(props.isSignedIn) {
        links = <div>
                    <MobileNavLink title="Find Projects" path="/find-projects" />
                    <MobileNavLink title="My Projects" path="/my-projects" />
                    <MobileNavLink title="Notifications" path="/notifications" />
                    <MobileNavLink title="My Profile" path="/my-profile" />
                    <MobileNavLink title="Sign Out" path="" click = {() => props.signOut()} />
                </div>
    }
    else {
        links = <div>
                    <MobileNavLink title="Sign In" path="" click={ () => showForm(<SignInForm close={() => toggleModal(false)} />, toggleModal, setTitle, setContent, "Sign In") } />
                    <MobileNavLink title="Sign Up" path="" click={ () => showForm(<SignUpForm close={() => toggleModal(false)} />, toggleModal, setTitle, setContent, "Sign Up") } />
                </div>
    }

    return (
        <div id="mobile-nav-container" className="bg-dark text-secondary d-block d-lg-none">
            <nav id="mobile-nav" className="navbar navbar-dark navbar-expand-lg justify-content-between justify-content-lg-start">
                <NavBrand />
                <div className="w-50 d-flex justify-content-end justify-content-lg-center " id="nav-links">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#dropDownNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            <div className="collapse navbar-collapse px-3 w-100 bg-dark" id="dropDownNav">
                    <ul className="navbar-nav w-100 d-flex justify-content-center pb-3">
                        <MobileNavLink title="Home" path="/" />
                        {links}
                    </ul>
                </div>
            {showModal ? <Modal title={modalTitle} closeModal = {() => toggleModal(false)}>{modalContent}</Modal> : null}
        </div>
    );
}

export default MobileNav;