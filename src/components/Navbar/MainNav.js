import React from 'react';

const MainNav = () => {
    return (
        <div id="main-nav" className="d-none d-lg-flex flex-column align-items-center text-secondary bg-dark">
            <div className="nav-item-container bg-secondary mb-1 w-100 d-flex justify-content-center align-items-center">
                <a href="#">
                    <i className="fas fa-home text-dark"></i>
                </a>
            </div>
            <div className="nav-item-container bg-dark mb-1 w-100 d-flex justify-content-center align-items-center">
                <a href="#" data-toggle="tooltip" data-placement="right" title="Search Projects">
                    <i className="fas fa-hammer text-secondary"></i>
                </a>
            </div>
            <div className="nav-item-container bg-dark mb-1 w-100 d-flex justify-content-center align-items-center">
                <a href="#" data-toggle="tooltip" data-placement="right" title="My Projects">
                    <i className="fas fa-tasks text-secondary"></i>
                </a>
            </div>
            <div className="nav-item-container bg-dark mb-1 w-100 d-flex justify-content-center align-items-center">
                <a href="#" data-toggle="tooltip" data-placement="right" title="Notifications">
                    <i className="fas fa-bell text-secondary"></i>
                </a>
            </div>
            <div className="nav-item-container bg-dark mb-1 w-100 d-flex justify-content-center align-items-center">
                <a href="#" data-toggle="tooltip" data-placement="right" title="My Profile">
                    <i className="fas fa-user-circle text-secondary"></i>
                </a>
            </div>
            <div className="nav-item-container bg-dark mb-1 w-100 d-flex justify-content-center align-items-center">
                <a href="#" data-toggle="tooltip" data-placement="right" title="Sign In">
                    <i className="fas fa-sign-in-alt text-secondary"></i>
                </a>
            </div>
            <div className="nav-item-container bg-dark mb-1 w-100 d-flex justify-content-center align-items-center">
                <a href="#" data-toggle="tooltip" data-placement="right" title="Sign Out">
                    <i className="fas fa-sign-out-alt text-secondary"></i>
                </a>
            </div>
            <div className="nav-item-container bg-dark w-100 d-flex justify-content-center align-items-center">
                <a href="#" data-toggle="tooltip" data-placement="right" title="Sign Up">
                    <i className="fas fa-user-plus text-secondary"></i>
                </a>
            </div>
        </div>
    );
}

export default MainNav;