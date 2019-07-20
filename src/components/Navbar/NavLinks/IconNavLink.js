import React from 'react';
import { Link } from 'react-router-dom';

const IconNavLink = props => {
    let link;
    if (props.path !== "") {
        link = <Link to={props.path}>
                <div data-toggle="tooltip" data-placement="right" title={props.title}>
                    <i className={`fas fa-${props.icon} text-${props.iconColor}`}></i>
                </div>
               </Link>
    }
    else {
        link = <a onClick={props.click}>
                    <div data-toggle="tooltip" data-placement="right" title={props.title}>
                        <i className={`fas fa-${props.icon} text-${props.iconColor}`}></i>
                    </div>
               </a>
    }
    return (
        <div className={`nav-item-container bg-${props.containerBgColor} mb-1 w-100 d-flex justify-content-center align-items-center`}>
            {link}
        </div>
    );
}

export default IconNavLink;