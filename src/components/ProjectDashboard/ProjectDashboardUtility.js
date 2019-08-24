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
    return mapToProjects(projects, projectsPerRow, modalFns)
}

function mapToProjects(projects, projectsPerRow, modalFns) {
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
                    .get();

    return projects.docs.map(doc => doc.data())
}

async function getUserProjects() {
    let projects = await firebase.firestore().collection('projects')
                    .where("adminUser","==",localStorage.getItem("username"))
                    .get();

    return projects.docs.map(doc => doc.data())
}

function filterSearchResults(filterValue, filters, updateFilters, updateList, windowWidth, modalFns) {
    let projectsPerRow = getProjectsPerRow(windowWidth)

    if(filterValue == "") {
        let updatedFilters = {
            ...filters,
            searchTerm: ""
        }
        updateFilters(updatedFilters)
        filterProjects(updatedFilters)
            .then(projects => {
                let projectList = mapToProjects(projects, projectsPerRow, modalFns)
                updateList(projectList)
            })
    }
    else {
        let updatedFilters = {
            ...filters,
            searchTerm: filterValue
        }

        updateFilters(updatedFilters)
        filterProjects(updatedFilters)
            .then(projects => {
                let projectList = mapToProjects(projects, projectsPerRow, modalFns)
                updateList(projectList)
            })
    }
}

function filterLanguageResults(filterValue, filters, updateFilters, updateList, windowWidth, modalFns) {
    let projectsPerRow = getProjectsPerRow(windowWidth)

    if(filterValue.includes("--")) {
        let updatedFilters = {
            ...filters,
            language: ""
        }
        updateFilters(updatedFilters)
        filterProjects(updatedFilters)
            .then(projects => {
                let projectList = mapToProjects(projects, projectsPerRow, modalFns)
                updateList(projectList)
            })
    }
    else {
        let updatedFilters = {
            ...filters,
            language: filterValue
        }

        updateFilters(updatedFilters)
        filterProjects(updatedFilters)
            .then(projects => {
                let projectList = mapToProjects(projects, projectsPerRow, modalFns)
                updateList(projectList)
            })
    }
}

async function filterProjects(filters) {
    let allProjects = await getAllProjects();

    if(filters.language !== "" && filters.searchTerm !== "") {
        let filteredByLanguage = await filterByLanguage(filters.language, allProjects)
        let filteredByTerm = await filterByTerm(filters.searchTerm, allProjects)
        return filteredByLanguage.filter(x => filteredByTerm.indexOf(x) > -1)
    }
    else if(filters.language !== "") {
        return await filterByLanguage(filters.language, allProjects);
    }
    else if(filters.searchTerm !== "") {
        return await filterByTerm(filters.searchTerm, allProjects)
    }
    else {
        return getAllProjects();
    }
}

async function filterByLanguage(filterValue, allProjects) {
    return Object.values(allProjects).filter(d => d.languages.toLowerCase().includes(filterValue))
}

async function filterByTerm(filterValue, allProjects) {
    return Object.values(allProjects).filter(d => d.title.toLowerCase().startsWith(filterValue.toLowerCase()))
}

const utilityFns = {
    getProjectsPerRow: getProjectsPerRow,
    setModal: setModal,
    mapProjects: mapProjects,
    getAllProjects: getAllProjects,
    getUserProjects: getUserProjects,
    filterSearchResults: filterSearchResults,
    filterLanguageResults: filterLanguageResults
}

export default utilityFns;