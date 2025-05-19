import React from 'react';
import Container from '../components/Container';
import ProjectsStyle from '../../public/styles/Projects.module.css';

function Projects() {
    
    return (

        <Container>

            <div id="projects" className={ProjectsStyle.projectContainer}>

                <div className={ProjectsStyle.projectContainerSection}>

                    <h2 className={ProjectsStyle.projectHeading}>
                        
                        Portfolio <span className={ProjectsStyle.projectHeadingSpan}> Highlights </span>
                    
                    </h2>

                </div>

            </div>

        </Container>

    )

}

export default Projects;