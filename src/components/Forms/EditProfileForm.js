import React, { useRef } from 'react';

const EditProfileForm = props => {

    let name = useRef();
    let languages = useRef();
    let yoe = useRef();

    return (
        <form onSubmit={(e) => { e.preventDefault(); props.updateProfile(name.current.value, languages.current.value, yoe.current.value, props.close) } }>
            <div className="form-group">
                <label htmlFor = "name">Name</label>
                <input ref={name} className="form-control" type="text" id="name" defaultValue={props.profile.name} />
            </div>
            <div className="form-group">
                <label htmlFor = "languages">Preferred Languages</label>
                <input ref={languages} className="form-control" type="text" id="languages" defaultValue={props.profile.languages} />
            </div>
            <div className="form-group">
                <label htmlFor = "yoe">Years of Experience</label>
                <input ref={yoe} className="form-control" type="number" id="yoe" defaultValue={props.profile.yoe} />
            </div>
            <button type="submit" className="btn btn-primary btn-block text-white">Update</button>
        </form>
    );
}

export default EditProfileForm;