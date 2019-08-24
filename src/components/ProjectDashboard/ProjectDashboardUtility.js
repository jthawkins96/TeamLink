import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Project from './Project/Project';

function getProjectsPerRow(width) {
    if (width >= 768 && width < 992)
        return 2;
    else if (width < 768)
        return 1;
    else
        return 4;
}

function setModal(title, description, modalFns) {
    modalFns.setModalTitle(title);
    modalFns.setModalContent(description);
    modalFns.toggleModal(true);
}

async function mapProjects(getProjects, projectsPerRow, modalFns) {
    let projects = await getProjects();
    return projects.map((project, index) => {
        let classes;
        if ((index + 1) % projectsPerRow === 1)
            classes = "mr-2";
        else if ((index + 1) % projectsPerRow === 0 && projectsPerRow !== 1)
            classes = "ml-2"
        else if (projectsPerRow !== 1)
            classes = "mx-2"
        return (
            <Project 
                key={index}
                title={project.title}
                languages={project.languages}
                click={() => setModal("Test", <p>asdfasdfasdf asdfasdf asdfasdf asdfasdf</p>, modalFns)}
                marginClass={classes} />
        );
    });
}

async function getAllProjects() {
    let projects = await firebase.firestore().collection('projects')
                    .get()
                    .then();

    return projects.docs.map(doc => doc.data())
}

async function getUserProjects() {
    let projects = await firebase.firestore().collection('projects')
                    .where("adminUser","==",localStorage.getItem("username"))
                    .get()
                    .then();

    return projects.docs.map(doc => doc.data())
}

const utilityFns = {
    getProjectsPerRow: getProjectsPerRow,
    setModal: setModal,
    mapProjects: mapProjects,
    getAllProjects: getAllProjects,
    getUserProjects: getUserProjects
}

export default utilityFns;