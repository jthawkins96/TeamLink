import React from 'react';
import { Link } from 'react-router-dom';

const MobileNavLink = props => {
    let link;
    if (props.path !== "") {
        link = <Link to={props.path}>
            <li className="nav-item">
                <div className="nav-link">{props.title}</div>
            </li>
        </Link>
    }
    else {
        link = <a onClick={props.click}>
            <li className="nav-item">
                <div className="nav-link">{props.title}</div>
            </li>
        </a>
    }
    return (
        link
    );
}

export default MobileNavLink;