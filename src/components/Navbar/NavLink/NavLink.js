import React from 'react';

const NavLink = props => {
    return (
        <li className="nav-item">
            <a className="nav-link">{props.title}</a>
        </li>
    );
}

export default NavLink;