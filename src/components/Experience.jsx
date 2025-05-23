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

      transform: "scale(0)",
      filter: "blur(20px)",
      
    });

    const [experienceDesignationAnime, setExperienceDesignationAnime] = useState({

        transform: "scale(0)",
        filter: "blur(20px)",

    });

    const [experienceYearsAnimation, setExperienceYearsAnimation] = useState({

        transform: "scale(0)",
        filter: "blur(20px)",

    });

    const [experienceParaTextAnime, setExperienceParaTextAnime] = useState({

        transform: "translateX(-1000px) skew(-50deg)",
        filter: "blur(20px)",

    });

    const [experienceImageAnime, setExperienceImageAnime] = useState({

        transform: "translateX(1000px) skew(50deg)",
        filter: "blur(20px)",

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

                    transform: "scale(1)",
                    transition: "all 0.8s ease 0.2s",
                    filter: "blur(0px)",

                });

                setExperienceDesignationAnime({

                    transform: "scale(1)",
                    filter: "blur(0px)",
                    transition: "all 0.8s ease 0.3s"

                });

                setExperienceYearsAnimation({

                    transform: "scale(1)",
                    filter: "blur(0px)",
                    transition: "all 0.8s ease 0.4s",

                });

                setExperienceParaTextAnime({

                    transform: "translateX(0px) skew(0deg)",
                    transition: "all 0.8s ease 0.5s",

                });

                setExperienceImageAnime({

                    transform: "translateX(0px) skew(0deg)",
                    transition: "all 0.8s ease 0.6s",
                    filter: "blur(0px)",

                })

            } else {
                
                setHeadingScrollStyle({

                    transform: "translateY(-500px)",
                    transition: "all 0.8s ease",
                    filter: "blur(50px)"

                });

                setCompanyNameAnimation({

                    transform: "scale(0)",
                    transition: 'all 0.8s ease',
                    filter: "blur(20px)",

                });

                setExperienceDesignationAnime({

                    transform: "scale(0)",
                    transition: "all 0.8s ease",
                    filter: "blur(20px)",

                });

                setExperienceYearsAnimation({

                    transform: "scale(0)",
                    transition: "all 0.8s ease",
                    filter: "blur(20px)",

                });

                setExperienceParaTextAnime({

                    transform: "translateX(-1000px) skew(-50deg)",
                    transition: "all 0.8s ease",
                    filter: 'blur(20px)'

                });

                setExperienceImageAnime({

                    transform: "translateX(1000px) skew(50deg)",
                    transition: "all 0.8s ease",
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
                            
                            <h4 style={experienceDesignationAnime}>{ExperienceTxt.designation}</h4>
                            <span style={experienceYearsAnimation}> {ExperienceTxt.yearsOfExperience} </span>
                        
                        </div>

                    </div>

                    <div className={ExperienceStyle.experienceSubContentText}>

                        <div className={ExperienceStyle.experienceparatext} style={experienceParaTextAnime}>

                            <p><FaHandPointRight />{ExperienceTxt.bullet1}</p>
                            <p><FaHandPointRight />{ExperienceTxt.bullet2}</p>
                            <p><FaHandPointRight />{ExperienceTxt.bullet3}</p>
                            <p><FaHandPointRight />{ExperienceTxt.bullet4}</p>
                            <p><FaHandPointRight />{ExperienceTxt.bullet5}</p>

                        </div>
                        <div className={ExperienceStyle.experienceimage} style={experienceImageAnime}>

                            {/** Image is used as a background image which is exists in Experience.module.css file */}

                        </div>

                    </div>

                </div>

            </div>

        </Container>

    );

}

export default Experience;