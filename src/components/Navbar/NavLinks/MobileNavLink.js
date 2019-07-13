import React from 'react';
import { Link } from 'react-router-dom';

const MobileNavLink = props => {
    return (
        <Link to={props.path}>
            <li className="nav-item">
                <div className="nav-link">{props.title}</div>
            </li>
        </Link>
    );
}

export default MobileNavLink;