import React from 'react';

const MyProfile = () => {
    return (
        <div id="my-profile-container" className="d-flex justify-content-center align-items-center my-5">
            <div className="row w-75 justify-content-center d-flex h-100 shadow border rounded">
                <div className="col-md-6 d-flex flex-column align-items-center bg-dark py-md-5 pt-3 text-secondary">
                    <div className="border rounded-circle circle-container d-flex align-items-center justify-content-center">
                    </div>
                    <h4>Username</h4>
                    <button className="btn btn-secondary">Edit Profile</button>
                </div>
                <div className="col-md-6 d-flex flex-column align-items-center py-md-5 pt-3">
                    <div className="border rounded-circle circle-container-large d-flex flex-column align-items-center justify-content-center">
                        <h3>3</h3>
                    </div>
                    <span>Projects Completed</span>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;