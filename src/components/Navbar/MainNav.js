import React from 'react';
import IconNavLink from './NavLinks/IconNavLink';


const MainNav = props => {
    let links;
    if(props.isSignedIn) {
        links = <div>
                    <IconNavLink path = "/find-projects" title = "Find Projects" icon = "hammer" iconColor = "secondary" containerBgColor="dark" />
                    <IconNavLink path = "/my-projects" title = "My Projects" icon = "tasks" iconColor = "secondary" containerBgColor="dark" />
                    <IconNavLink path = "/notifications" title = "Notifications" icon = "bell" iconColor = "secondary" containerBgColor="dark" />
                    <IconNavLink path = "/my-profile" title = "My Profile" icon = "user-circle" iconColor = "secondary" containerBgColor="dark" />
                    <IconNavLink path = "/" title = "Sign Out" icon = "sign-out-alt" iconColor = "secondary" containerBgColor="dark" />
                </div>
    }
    else {
        links = <div>
                    <IconNavLink path = "/" title = "Sign In" icon = "sign-in-alt" iconColor = "secondary" containerBgColor="dark" />
                    <IconNavLink path = "/" title = "Sign Up" icon = "user-plus" iconColor = "secondary" containerBgColor="dark" />
                </div>
    }

    return (
        <div id="main-nav" className="d-none d-lg-flex flex-column align-items-center text-secondary bg-dark">
                <IconNavLink path = "/" title = "Home" icon = "home" iconColor = "dark" containerBgColor="secondary" />
                {links}
        </div>
    );
}

export default MainNav;