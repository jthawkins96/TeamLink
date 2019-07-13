import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Filter from '../Filter/Filter';
import Project from './Project/Project';
import Modal from '../Shared/Modal/Modal';
import useViewportWidth from '../../hooks/useViewportWidth';

function getProjectsPerRow(width) {
    if (width >= 768 && width < 992)
        return 2;
    else if (width < 768)
        return 1;
    else
        return 4;
}

const ProjectDashboard = props => {

    function setModal(title, description) {
        setModalTitle(title);
        setModalContent(<p>{description}</p>);
        toggleModal(true);
    }

    function mapProjects(array, projectsPerRow) {
        return array.map((_, index) => {
            let classes;
            if ((index + 1) % projectsPerRow === 1)
                classes = "mr-2";
            else if ((index + 1) % projectsPerRow === 0 && projectsPerRow !== 1)
                classes = "ml-2"
            else if (projectsPerRow !== 1)
                classes = "mx-2"
            return (
                <Project title="Test"
                    languages="JavaScript, HTML, CSS"
                    click={() => setModal("Test", "asdfasdfasdf asdfasdf asdfasdf asdfasdf")}
                    marginClass={classes} />
            );
        });
    }

    let languageFilter = ['JavaScript', 'HTML', 'CSS'];
    let difficultyFilter = ['Easy', 'Medium', 'Hard'];
    const { innerWidth: width } = window;
    const projectsPerRow = getProjectsPerRow(width);
    const projects = mapProjects([0, 1, 2, 3, 4, 5, 6, 7], projectsPerRow);

    const [showModal, toggleModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [modalTitle, setModalTitle] = useState(null);
    const [viewportWidth, setWidth] = useState(width);

    useViewportWidth(setWidth);

    let modal = showModal ? <Modal title={modalTitle} closeModal={() => toggleModal(false)}>{modalContent}</Modal> : null;

    return (

        <div>
            <div id="filters-container" className="d-block d-md-flex justify-content-md-start mb-4">
                <div className="mr-3">
                    <SearchBar />
                </div>
                <div className="mr-3 d-inline-block my-3 my-md-0">
                    <Filter items={languageFilter} />
                </div>
                <div className="mr-3 d-inline-block my-3 my-md-0">
                    <Filter items={difficultyFilter} />
                </div>
            </div>
            <div className="projects-container d-flex justify-content-start flex-wrap">
                {projects}
            </div>
            {modal}
        </div>
    );
}

export default ProjectDashboard;