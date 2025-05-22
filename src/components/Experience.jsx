import React, {useState, useEffect} from 'react';
import Container from './Container';
import ExperienceStyle from '../../public/styles/Experience.module.css';
import ExperienceTxt from '../objects/Experiencetxt';
import { FaHandPointRight } from "react-icons/fa6";

function Experience() {

    const [headingScrollStyle, setHeadingScrollStyle] = useState({

        transform: "translateY(-500px)",
        filter: "blur(50px)"

    });

    const [companyNameAnimation, setCompanyNameAnimation] = useState({

      transform: "translateY(500px)",
      filter: "blur(20px)",
      position: "absolute",
      content: "",
      top: "50px",
      left: "0",
      height: "3px",
      width: "100%",
      backgroundColor: "#efcb55",
      
    });

    function handelExperienceScroll() {
        
        if(window.innerWidth > 600){

            if (window.scrollY > 1300) {
                
                setHeadingScrollStyle({

                    transform: "translateY(0px)",
                    transition: "all 0.8s ease",
                    filter: "blur(0px)",

                });

                setCompanyNameAnimation({

                    transform: "translateY(0px)",
                    transition: "all 0.8s ease",
                    filter: "blur(0px)",

                });

            } else {
                
                setHeadingScrollStyle({

                    transform: "translateY(-500px)",
                    transition: "all 0.8s ease",
                    filter: "blur(50px)"

                });

                setCompanyNameAnimation({

                    transform: "translateY(500px)",
                    transition: 'all 0.8s ease',
                    filter: "blur(20px)",

                })

            }

        }

    }

    useEffect(() => {

        setTimeout(() => {

            window.addEventListener("scroll", handelExperienceScroll);

        })

    }, [])
    
    return (

        <Container>

            <div id="experience" className={ExperienceStyle.experienceContainer} onScroll={handelExperienceScroll}>

                <div className={ExperienceStyle.experienceHeading}>

                    <h2 style={headingScrollStyle}>
                    Experience <span className={ExperienceStyle.experienceHeadingSpan}> & Role </span> </h2>

                </div>
                <div className={ExperienceStyle.experienceContent}>

                    <div className={ExperienceStyle.experienceContentHeading}>

                        <div className={ExperienceStyle.experienceContentText}>
                            
                            <h3 style={companyNameAnimation}> {ExperienceTxt.companyName}  </h3>
                        
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