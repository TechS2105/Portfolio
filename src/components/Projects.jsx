import React, {useState, useEffect} from 'react';
import Container from '../components/Container';
import ProjectsStyle from '../../public/styles/Projects.module.css';
import ProjectCarousel from '../components/Projectcarousel';

function Projects() {

    const [portfolioHeadingAnime, setPortfolioHeadingAnime] = useState({

        transform: "translateY(-500px)",
        filter: "blur(20px)",

    });

    const [projectShowCaseAnimation, setProjectShowCaseAnimation] = useState({

        transform: "translateY(1000px) scale(0)",
        filter: "blur(50px)",

    })

    function projectSectionScroll() {
        
        if (window.innerWidth > 600) {

            if (window.scrollY > 2700) {
            
                setPortfolioHeadingAnime({

                    transform: "translateY(0px)",
                    transition: "all 0.8s ease",
                    filter: "blur(0px)",

                });

                setProjectShowCaseAnimation({

                    transform: "translateY(0px) scale(1)",
                    transition: "all 0.8s ease 0.5s",
                    filter: "blur(0px)",

                });

                
            } else {
                
                setPortfolioHeadingAnime({

                    transform: "translateY(-500px)",
                    transition: "all 0.8s ease",
                    filter: "blur(20px)",

                });

                setProjectShowCaseAnimation({

                    transform: "translateY(1000px) scale(0)",
                    transition: "all 0.8s ease",
                    filter: "blur(50px)",

                });

            }

        } else if (window.innerWidth < 600) {
            
            if (window.scrollY > 2500) {
                
                setPortfolioHeadingAnime({

                    transform: "translateY(0px)",
                    transition: "all 0.8s ease",
                    filter: "blur(0px)"

                });

                setProjectShowCaseAnimation({

                    transform: "translateY(0px) scale(1)",
                    filter: "blur(0px)",
                    transition: "all 0.8s ease 0.5s",

                })

            } else {
                
                setPortfolioHeadingAnime({

                    transform: "translateY(-500px)",
                    transition: "all 0.8s ease",
                    filter: "blur(20px)",

                });

                setProjectShowCaseAnimation({

                    transform: "translateY(1000px) scale(0)",
                    transition: "all 0.8s ease",
                    filter: "blur(50px)",

                });

            }

        }

    }

    useEffect(() => {

        setTimeout(() => {

            window.addEventListener("scroll", projectSectionScroll);

        })

    }, []);
    
    return (

        <Container>

            <div id="projects" className={ProjectsStyle.projectContainer} onScroll={projectSectionScroll}>

                <div className={ProjectsStyle.projectContainerSection}>

                    <h2 className={ProjectsStyle.projectHeading} style={portfolioHeadingAnime}>
                        
                        Portfolio <span className={ProjectsStyle.projectHeadingSpan}> Highlights </span>
                    
                    </h2>

                </div>

                <div className={ProjectsStyle.projectShowCaseContainer} style={projectShowCaseAnimation}>

                    <ProjectCarousel />

                </div>

            </div>

        </Container>

    )

}

export default Projects;