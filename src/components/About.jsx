import React, {useEffect, useState} from 'react';
import Container from '../components/Container';
import AboutStyle from '../../public/styles/About.module.css';
import { LuDownload } from "react-icons/lu";

let image = "/images/image4.jpg";

function About() {

    const [imageAnimation, setImageAnimation] = useState({

        transform: "scale(0)",
        filter: "blur(50px)"

    });

    const [aboutHeading, setAboutHeading] = useState({

        transform: "translateX(-1000px)",
        filter: "blur(50px)",

    });

    const [aboutpara1, setFirstAboutPara] = useState({

        transform: "translateX(-1000px)",
        filter: "blur(50px)",

    });

    const [aboutpara2, setSecondAboutPara] = useState({

        transform: "translateX(-1000px)",
        filter: "blur(50px)",

    });

    const [aboutbtn, setAboutBtn] = useState({

        transform: "translateX(-1000px)",
        filter: "blur(50px)"

    });

    const [cvdownloadbtn, setCvdownloadbtn] = useState({

        transform: "scale(0)",
        filter: "blur(20px)"

    });

    function handelScroll() {
        
        if (window.scrollY > 500) {
            
            setImageAnimation({

                transform: "scale(1) rotateY(360deg)",
                transition: "all 0.8s ease",
                filter: "blur(0px)"

            });

            setAboutHeading({

                transform: "translateX(0px)",
                filter: "blur(0px)",
                transition: "all 0.8s ease 0.3s"

            });

            setFirstAboutPara({

                transform: "translateX(0px)",
                filter: "blur(0px)",
                transition: "all 0.8s ease 0.4s"

            });

            setSecondAboutPara({

                transform: "translateX(0px)",
                filter: "blur(0px)",
                transition: "all 0.8s ease 0.5s"

            });

            setAboutBtn({

                transform: "translateX(0px)",
                filter: "blur(0px)",
                transition: "all 0.8s ease 0.6s"
                
            });

            setCvdownloadbtn({

                transform: "scale(1)",
                filter: "blur(0)",
                transition: "all 0.8s ease 2s",

            });

        } else {
            
            setImageAnimation({

                transform: "scale(0)",
                transition: "all 0.8s ease",
                filter: "blur(50px)"

            });

            setAboutHeading({

                transform: "translateX(-1000px)",
                transition: "all 0.8s ease 0.5s",
                filter: "blur(50px)",

            });

            setFirstAboutPara({

                transform: "translateX(-1000px)",
                transition: "all 0.8s ease 0.4s",
                filter: "blur(50px)"

            });

            setSecondAboutPara({

                transform: "translateX(-1000px)",
                transition: "all 0.8s ease 0.3s",
                filter: "blur(50px)"

            });

            setAboutBtn({

                transform: "translateX(-1000px)",
                transition: "all 0.8s ease 0.2s",
                filter: "blur(50px)"

            });

            setCvdownloadbtn({

                transform: "scale(0)",
                transition: "all 0.8s ease",
                filter: "blur(20px)",

            })

        }

    }

    useEffect(() => {

        window.addEventListener("scroll", handelScroll);

    }, []);
    
    return (
        <Container>
            
            <div className={AboutStyle.aboutcontainer} id='about' onScroll={handelScroll}>
                
                <div className={AboutStyle.aboutsection1}>
                    
                    <img src={image} style={imageAnimation}/>

                </div>
                <div className={AboutStyle.aboutsection2}>

                    <div className={AboutStyle.aboutcontent}>

                        <h2 style={aboutHeading}> About <br /> <span className={AboutStyle.aboutSpanText}> Me  </span>  </h2> 
                        
                        <p style={aboutpara1}>I’m a passionate Full-Stack Developer with experience in building responsive, high-performance web applications. I specialize in both front-end and back-end technologies, including HTML, CSS, JavaScript, React, Node.js, Express, and databases like MySQL and PostgreSQL. My approach combines clean, maintainable code with a focus on user experience and scalability.</p>

                        <p style={aboutpara2}>I’m driven by the challenge of solving real-world problems through intuitive and efficient digital solutions. Whether working independently or as part of a team, I aim to create products that are both functional and visually engaging. This portfolio highlights my technical skills, creative thinking, and dedication to continuous learning. If you’re interested in collaborating or learning more about my work, feel free to reach out—I’m always open to exciting opportunities and new challenges.
                        </p>

                        <button style={aboutbtn}><a href="/files/Sovan Sundar Dey Resume.pdf" target='_blank'> Know More About Me </a></button>
                        <a href='/files/Sovan Sundar Dey Resume.pdf' style={cvdownloadbtn} download>Download CV <LuDownload /></a>
                        
                    </div>

                </div>
            </div>
            
      </Container>
    );

}

export default About;