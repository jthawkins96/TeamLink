import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Filter from '../Filter/Filter';
import Modal from '../Modal/Modal';
import useViewportWidth from '../../hooks/useViewportWidth';
import AddProjectForm from '../Forms/AddProjectForm';
import utilityFns from './ProjectDashboardUtility';


const ProjectDashboard = (props) => { 
    const [showModal, toggleModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [modalTitle, setModalTitle] = useState(null);
    const [viewportWidth, setWidth] = useState(null);
    const [projectList, setProjectList] = useState(null);
    const [filterList, setFilterList] = useState({searchTerm: "", language: ""});
    const { innerWidth: width } = window;
    
    const modalFns = { setModalTitle: setModalTitle, setModalContent: setModalContent, toggleModal: toggleModal };
    useViewportWidth(setWidth);

    let languageFilter = ['-- Language --','JavaScript', 'HTML', 'CSS'];
    let difficultyFilter = ['-- Difficulty --','Easy', 'Intermediate', 'Hard'];
    let dateFilter = ['Most Recent', 'Oldest'];

    useEffect(() => {
        const projectsPerRow = utilityFns.getProjectsPerRow(width);
        utilityFns.mapProjects(props.getProjects == "all" ? utilityFns.getAllProjects : utilityFns.getUserProjects, projectsPerRow, modalFns).then(projects => setProjectList(projects));
    }, [])

    let modal = showModal ? <Modal title={modalTitle} closeModal={() => toggleModal(false)}>{modalContent}</Modal> : null;

    return (
        <div>
            <div id="filters-container" className="d-block d-md-flex justify-content-md-start mb-4">
                <div className="mr-3">
                    <SearchBar modalFns={modalFns} filters={filterList} updateFilters={setFilterList} windowWidth={width} updateList={setProjectList} filterResults={utilityFns.filterSearchResults} />
                </div>
                <div className="mr-3 d-inline-block my-3 my-md-0">
                    <Filter modalFns={modalFns} windowWidth={width} filters={filterList} updateFilters={setFilterList} updateList={setProjectList} filterResults={utilityFns.filterLanguageResults} items={languageFilter} />
                </div>
                { props.isMyProjectsPage ? <button onClick={() => utilityFns.setModal("Add Project", <AddProjectForm closeModal = {() => toggleModal(false)}/>, modalFns)} className="btn btn-primary">Add Project</button> : null }
            </div>
            <div className="projects-container d-flex justify-content-start flex-wrap">
                {projectList}
            </div>
            {modal}
        </div>
    );
}

export default ProjectDashboard;