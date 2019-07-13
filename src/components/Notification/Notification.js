import React from 'react';

const Notification = props => {
    return (
        <div className="notification-container shadow my-4 pt-2 pb-4 px-2">
            <div className="d-flex mb-4">
                <button className="btn btn-danger">x</button>
            </div>
            <div className="d-flex py-1 px-4 flex-column">
                <h4>Jeff Bridges has sent a team request</h4>
                <hr className="w-100"/>
            </div>
            
            <div className="d-flex py-1 px-4">
                <p>Lorem ipsum dolor et tu brute</p>
            </div>
            <div className="d-flex py-1 px-4">
                <button className="btn btn-primary">Accept Request</button>
            </div>
        </div>
    );
}

export default Notification;