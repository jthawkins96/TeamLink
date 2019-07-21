import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../../store/actions/auth';
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
        <div className={`nav-item-container ${props.classes} mb-1 w-100 justify-content-center align-items-center`}>
            {link}
        </div>
    );
}

const mapActionToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapActionToProps)(IconNavLink);