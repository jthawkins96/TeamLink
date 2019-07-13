import React from 'react';

const Project = props => {
    return (
        <div className= {`${props.marginClass} project-container d-flex flex-column align-items-center justify-content-center text-center my-2 p-3 shadow`} onClick={props.click}>
            <h3>{props.title}</h3>
            <hr className="w-100"/>
            <p>{props.languages}</p>
            <button type = "button" className = "btn btn-primary">Request to Join</button>
        </div>
    );
}

export default Project;