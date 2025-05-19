import React, {useState} from 'react';
import Container from '../components/Container';
import ProjectsStyle from '../../public/styles/Projects.module.css';

let image = '../../public/images/vionesse image/vionessefinalimage.png';
let image2 = '../../public/images/Guitarist image.png';
let image3 = "../../public/images/digitalera-new.jpeg";
let image4 = "../../public/images/photographer.jpeg";

function Projects() {

    const [imageScrolling, setImageScrolling] = useState();
    const [secondImageScrolling, setSecondImageScrolling] = useState();
    const [thirdImageScrolling, setThirdImageScrolling] = useState();
    const [fourthImageScrolling, setFourthImageScrolling] = useState();

    function mouseOverScrolling() {

        setImageScrolling({

            transform: "translateY(-910px)",
            transition: "all 5s ease",

        });

    }

    function mouseOutScrolling() {
        
        setImageScrolling({

            transform: "translateY(0px)",
            transition: "all 5s ease",

        });

    }

    function secondMouseOverScrolling() {
        
        setSecondImageScrolling({

            transform: "translateY(-910px)",
            transition: "all 5s ease",

        });

    }

    function secondMouseOutScrolling() {
        
        setSecondImageScrolling({

            transform: "translateY(0px)",
            transition: "all 5s ease"

        });

    }

    function thirdMouseOverScrolling() {
        
        setThirdImageScrolling({

            transform: "translateY(-910px)",
            transition: "all 5s ease"

        });

    }

    function thirdMouseOutScrolling() {
        
        setThirdImageScrolling({

            transform: "translateY(0px)",
            transition: "all 5s ease",

        })

    }

    function fourthMouseOverScrolling() {
        
        setFourthImageScrolling({

            transform: "translateY(-550px)",
            transition: "all 3s ease"

        });

    }

    function fourthMouseOutScrolling() {
        
        setFourthImageScrolling({

            transform: "translateY(0px)",
            transition: "all 5s ease"

        })

    }
    
    return (

        <Container>

            <div id="projects" className={ProjectsStyle.projectContainer}>

                <div className={ProjectsStyle.projectContainerSection}>

                    <h2 className={ProjectsStyle.projectHeading}>
                        
                        Portfolio <span className={ProjectsStyle.projectHeadingSpan}> Highlights </span>
                    
                    </h2>

                </div>

                <div className={ProjectsStyle.projectShowCaseContainer}>

                    <div className={ProjectsStyle.subProjectShowCaseContainer}>

                        <div className={ProjectsStyle.projectIframeCustomStyle} onMouseOver={mouseOverScrolling} onMouseOut={mouseOutScrolling}>

                            <a href="https://vionesse.com" target='_blank'><img src={image} style={imageScrolling}/></a>

                        </div>

                        <div className={ProjectsStyle.projectIframeCustomStyle} onMouseOver={secondMouseOverScrolling} onMouseOut={secondMouseOutScrolling}>

                            <a href="https://techs2105.github.io/guitarist/" target='_blank'><img src={image2} style={secondImageScrolling}/></a>

                        </div>

                        <div className={ProjectsStyle.projectIframeCustomStyle} onMouseOver={thirdMouseOverScrolling} onMouseOut={thirdMouseOutScrolling}>

                            <a href="https://techs2105.github.io/digitalera/" target='_blank'><img src={image3} style={thirdImageScrolling}/></a>

                        </div>

                        <div className={ProjectsStyle.projectIframeCustomStyle} onMouseOver={fourthMouseOverScrolling} onMouseOut={fourthMouseOutScrolling}>

                            <a href="https://techs2105.github.io/photographer/" target='_blank'><img src={image4} style={fourthImageScrolling}/></a>

                        </div>

                    </div>

                </div>

            </div>

        </Container>

    )

}

export default Projects;