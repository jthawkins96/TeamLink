import React, { useRef } from 'react';
import { signIn } from '../../store/actions/auth';
import { connect } from 'react-redux'

const SignInForm = props => {
    const email = useRef();
    const password = useRef();

    return (
        <form onSubmit={(e) => { e.preventDefault(); props.signIn(email.current.value, password.current.value, props.close) } }>
            <div className="form-group">
                <label htmlFor = "email">Email</label>
                <input ref={email} className="form-control" type="email" id="email" required="required" />
            </div>
            <div className="form-group">
                <label htmlFor = "password">Password</label>
                <input ref={password} className="form-control" type="password" id="password" />
            </div>
            <button type="submit" className="btn btn-primary btn-block text-white">Login</button>
        </form>
    );
}

const mapActionToProps = dispatch => {
    return {
        signIn: (email, password, callback) => dispatch(signIn(email, password, callback))
    }
}

export default connect(null, mapActionToProps)(SignInForm);