import React, { useRef } from 'react';
import { signUp } from '../../store/actions/auth';

const SignUpForm = props => {
    const email = useRef();
    const password = useRef();

    return (
        <form onSubmit={(e) => { e.preventDefault(); signUp(email.current.value, password.current.value, props.close) } }>
            <div className="form-group">
                <label htmlFor = "name">Name</label>
                <input className="form-control" type="text" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor = "email">Email</label>
                <input ref={email} className="form-control" type="email" id="email" />
            </div>
            <div className="form-group">
                <label htmlFor = "password">Password</label>
                <input ref={password} className="form-control" type="password" id="password" />
            </div>
            <button className="btn btn-primary text-white btn-block">Register</button>
        </form>
    );
}

export default SignUpForm;