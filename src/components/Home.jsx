import React, {useState, useEffect} from 'react';
import HomeStyle from '../../public/styles/Home.module.css';
import Container from '../components/Container';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

let image = "../../public/images/image2.jpg";

function Home() {

    const [headingAnimation, setHeadingAnimation] = useState({

        transform: "translateY(-1000px)",
        filter: "blur(50px)"

    });

    const [spanAnimation, setSpanAnimation] = useState({

        transform: "translateY(-500px)",
        filter: "blur(50px)"

    });

    const [para1, setPara1] = useState({

        transform: "scale(0)", 
        filter: "blur(50px)",

    });

    const [para2, setPara2] = useState({

        transform: "scale(0)",
        filter: "blur(50px)",

    });

    const [loadImage, setLoadImage] = useState({

        transform: "translateY(1000px)",
        filter: "blur(50px)",
        border: "none"

    });

    const [sociallink1, setSociallink1] = useState({

        transform: "translateY(-50px)",

    });

    const [sociallink2, setSociallink2] = useState({

        transform: "translateY(50px)"

    });
    
    const [sociallink3, setSociallink3] = useState({

        transform: "translateY(-50px)",

    });

    function loadContainer() {
        
        useEffect(() => {

            setTimeout(() => {

                setHeadingAnimation({

                    transform: "translateX(0px)",
                    filter: "blur(0px)",
                    transition: "all 1s ease"

                });

            }, 1800)

        }, []);

        useEffect(() => {

            setTimeout(() => {

                setSpanAnimation({

                    transform: "translateX(0px)",
                    filter: "blur(0px)",
                    transition: "all 1s ease"

                })

            }, 1500)

        });

        useEffect(() => {

            setTimeout(() => {

                setPara1({

                    transform: "scale(1)",
                    transition: "all 0.8s ease"

                })

            }, 2000)

        });

        useEffect(() => {

            setTimeout(() => {

                setPara2({

                    transform: "scale(1)",
                    transition: "all 0.8s ease",
                    filter: "blur(0)"

                })

            }, 2100)

        });

        useEffect(() => {

            setTimeout(() => {

                setLoadImage({

                    transform: "translateY(0px)",
                    transition: "all 0.8s ease",
                    filter: "blur(0px)",
                    border: "10px double  #efcb55",
        
                })

            }, 2000)

        });

        useEffect(() => {

            setTimeout(() => {

                setSociallink1({

                    transform: "translateY(0px)",
                    transition: "all 0.8s ease",

                });

            }, 2100)

        });

        useEffect(() => {

            setTimeout(() => {

                setSociallink2({

                    transform: "translateY(0px)",
                    transition: "all 0.8s ease"

                })

            }, 2100)

        });

        useEffect(() => {

            setTimeout(() => {

                setSociallink3({

                    transform: "translateY(0px)",
                    transition: "all 0.8s ease"

                })

            }, 2100);

        })

    }
    
    return (

       <Container>
            
            <div className={HomeStyle.container} id='home'>

                <div className={HomeStyle.container1}>

                    <div className={HomeStyle.textsection} onLoad={loadContainer()}>

                        <span style={spanAnimation}> Hello,</span>

                        <div className={HomeStyle.headingtext}>

                            <h1 style={headingAnimation}> I'm <span className={HomeStyle.spanName}> Sovan Sundar Dey </span></h1><br/>

                        </div>

                        <div className={HomeStyle.designation}>

                            <span className={HomeStyle.spanStyle}>
                                
                                <p style={para1}> Full Stack Developer </p> | <p style={para2}> Wordpress Developer </p>

                            </span>

                        </div>

                        <div className={HomeStyle.sociallinks} onLoad={loadContainer()}>

                            <a href="https://www.linkedin.com/in/sovan-sundar-dey-3b3a61238/" target="_blank"><FaLinkedinIn style={sociallink1}/></a>
                            <a href="https://github.com/TechS2105" target="_blank" style={sociallink2}><FaGithub /></a>
                            <a href="#" style={sociallink3}><BiLogoGmail /></a>

                        </div>

                    </div>

                </div>
                <div className={HomeStyle.container2} onLoad={loadContainer()}>

                    <img src={image} style={loadImage} />

                </div>

            </div>


       </Container>

    )

}

export default Home;