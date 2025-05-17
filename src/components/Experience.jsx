import React from 'react';
import Container from './Container';
import ExperienceStyle from '../../public/styles/Experience.module.css';

function Experience() {
    
    return (

        <Container>

            <div id="experience" className={ExperienceStyle.experienceContainer}>

                <div className={ExperienceStyle.experienceHeading}>

                    <h2> My Work Experience </h2>

                </div>
                <div className={ExperienceStyle.experienceContent}>

                    <div className={ExperienceStyle.experienceContentHeading}>

                        <div className={ExperienceStyle.experienceContentText}>
                            
                            <h3> TechWala IT Consultant </h3>
                        
                        </div>
                        <div className={ExperienceStyle.experienceContentText}>
                            
                            <span> July 2023 - July 2024 </span>
                        
                        </div>

                    </div>

                </div>

            </div>

        </Container>

    );

}

export default Experience;