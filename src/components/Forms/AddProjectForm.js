import React, { useRef } from 'react';
import * as firebase from 'firebase/app';
import alertify from 'alertifyjs';

function addNewProject(title, languages, difficulty, description, closeModal) {
    firebase.firestore().collection('projects').add({
        adminUser: localStorage.getItem('username').toString(),
        title: title,
        languages: languages,
        difficulty: difficulty,
        description: description,
        dateCreated: new Date(),
        users:[]
    })
    .then(() => {
        alertify.notify('Successfully created your new project!', 'success', 3);
        closeModal();
    })
    .catch(() => {
        alertify.notify('There was a problem creating your project', 'error', 3)
    })
}

const AddProjectForm = props => {
    let title = useRef();
    let languages = useRef();
    let difficulty = useRef();
    let description = useRef(); 

    return (
        <form onSubmit={(e) => { e.preventDefault(); addNewProject(title.current.value, languages.current.value, difficulty.current.value, description.current.value, props.closeModal) } }>
            <div className="form-group">
                <label htmlFor = "title">Title</label>
                <input ref={title} className="form-control" type="text" id="title" required="required" />
            </div>
            <div className="form-group">
                <label htmlFor = "languages">Languages (separated by commas)</label>
                <input ref={languages} className="form-control" type="text" id="languages" required="required" />
            </div>
            <div className="form-group">
            <label htmlFor = "difficulty">Difficulty</label>
                <select ref={difficulty} className="form-control" id="difficulty">
                    <option value="easy">Easy</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor = "description">Description</label>
                <textarea rows="5" ref={description} className="form-control" type="text" id="description" />
            </div>
            <button type="submit" className="btn btn-primary btn-block text-white">Create New Project</button>
        </form>
    );
}

export default AddProjectForm;