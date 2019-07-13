import React from 'react';
import NavLink from './NavLinks/MobileNavLink';
import NavBrand from './NavBrand/NavBrand';

const MobileNav = () => {
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
                        <NavLink title="Home" path="/" />
                        <NavLink title="Find Projects" path="/find-projects" />
                        <NavLink title="My Projects" path="/my-projects" />
                        <NavLink title="Notifications" path="/notifications" />
                        <NavLink title="My Profile" path="/my-profile" />
                        <NavLink title="Sign In" path="/" />
                        <NavLink title="Sign Out" path="/" />
                        <NavLink title="Sign Up" path="/" />
                    </ul>
                </div>

        </div>
    );
}

export default MobileNav;