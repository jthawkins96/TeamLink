import React from 'react';
import { Link } from 'react-router-dom';

const IconNavLink = props => {
    return (
        <div className={`nav-item-container bg-${props.containerBgColor} mb-1 w-100 d-flex justify-content-center align-items-center`}>
            <Link to={props.path}>
                <div div data-toggle="tooltip" data-placement="right" title={`${props.title}`}>
                    <i className={`fas fa-${props.icon} text-${props.iconColor}`}></i>
                </div>
            </Link>
        </div>
    );
}

export default IconNavLink;