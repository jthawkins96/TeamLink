import React from 'react';

const SignUpForm = () => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor = "name">Name</label>
                <input className="form-control" type="text" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor = "username">Username</label>
                <input className="form-control" type="text" id="username" />
            </div>
            <div className="form-group">
                <label htmlFor = "password">Password</label>
                <input className="form-control" type="password" id="password" />
            </div>
        </form>
    );
}

export default SignUpForm;