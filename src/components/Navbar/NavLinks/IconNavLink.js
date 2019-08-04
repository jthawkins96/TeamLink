import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../../store/actions/auth';
import { Link } from 'react-router-dom';

const IconNavLink = props => {
    let link;
    if (props.path !== "") {
        link = <Link to={props.path} onClick={() => changeBackground(props.title, props.changeBackground)} >
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

function changeBackground(title, changeBackgroundAction) {
    switch(title) {
        case "Home":
            changeBackgroundAction("home-bg")
            break;
        default:
            changeBackgroundAction("")
    }
}

const mapActionToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut()),
        changeBackground: (className) => dispatch({ type:'CHANGE_BACKGROUND', value: className })
    }
}

export default connect(null, mapActionToProps)(IconNavLink);