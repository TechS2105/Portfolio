import React from 'react';
import Container from './Container';
import ExperienceStyle from '../../public/styles/Experience.module.css';
import ExperienceTxt from '../objects/Experiencetxt';
import { FaHandPointRight } from "react-icons/fa6";

function Experience() {
    
    return (

        <Container>

            <div id="experience" className={ExperienceStyle.experienceContainer}>

                <div className={ExperienceStyle.experienceHeading}>

                    <h2> Work <span style={{color: "#efcb55", textShadow: "2px 2px 2px #292929"}}> Experience </span> </h2>

                </div>
                <div className={ExperienceStyle.experienceContent}>

                    <div className={ExperienceStyle.experienceContentHeading}>

                        <div className={ExperienceStyle.experienceContentText}>
                            
                            <h3> {ExperienceTxt.companyName}  </h3>
                        
                        </div>
                        <div className={ExperienceStyle.experienceContentText}>
                            
                            <h4>{ExperienceTxt.designation}</h4>
                            <span> {ExperienceTxt.yearsOfExperience} </span>
                        
                        </div>

                    </div>

                    <div className={ExperienceStyle.experienceSubContentText}>

                        <div className={ExperienceStyle.experienceparatext}>

                            <p><FaHandPointRight />{ExperienceTxt.bullet1}</p>
                            <p><FaHandPointRight />{ExperienceTxt.bullet2}</p>
                            <p><FaHandPointRight />{ExperienceTxt.bullet3}</p>
                            <p><FaHandPointRight />{ExperienceTxt.bullet4}</p>
                            <p><FaHandPointRight />{ExperienceTxt.bullet5}</p>

                        </div>
                        <div className={ExperienceStyle.experienceimage}>

                            

                        </div>

                    </div>

                </div>

            </div>

        </Container>

    );

}

export default Experience;