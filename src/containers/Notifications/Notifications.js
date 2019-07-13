import React from 'react';
import Notification from '../../components/Notification/Notification';
import SearchBar from '../../components/SearchBar/SearchBar';

const Notifications = () => {
    const notifications = [0, 1, 2, 3, 4, 5].map(_ => <Notification />)

    return (
        <div id="notifications-container">
            <div id="filters-container" className="d-block d-md-flex justify-content-md-start">
                <div>
                    <SearchBar />
                </div>
            </div>
            <div id="notifications-wrapper">
                {notifications}
            </div>
        </div>
    );
}

export default Notifications;