import React from 'react';

const Home = () => {
    return (
        <div id="home-container" className="h-75 mb-3 d-flex flex-column justify-content-center">
            <h3>Find Your Team With TeamLink</h3>
            <p className="w-50 my-3">Working on a project and need a team quick? TeamLink will help you find the perfect teammates to get the job done.</p>
            <div id="home-buttons-container" className="d-flex justify-content-center my-3 flex-column flex-md-row">
                <button className="btn btn-primary mr-md-1 mb-1 mb-md-0">Create New Project</button>
                <button className="btn btn-secondary ml-md-1 mt-1 mt-md-0">Join a Team</button>
            </div>
        </div>
    );
}

export default Home;