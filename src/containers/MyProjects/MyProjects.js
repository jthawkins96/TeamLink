import React from 'react';
import ProjectDashboard from '../../components/ProjectDashboard/ProjectDashboard';

const MyProjects = () => {
    return (
        <div id="my-projects-container" className="mx-3 mx-sm-5 mx-xl-3 my-5">
            <ProjectDashboard isMyProjectsPage="true" />
        </div>
    );
}

export default MyProjects;