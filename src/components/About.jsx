import React, {useEffect, useState} from 'react';
import Container from '../components/Container';
import AboutStyle from '../../public/styles/About.module.css';

let image = "../../public/images/image4.jpg";

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
                        
                        <p style={aboutpara1}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere fuga deleniti aliquam itaque perspiciatis, expedita aliquid totam officiis, numquam, obcaecati dolores aut! Non debitis consequatur quae voluptatem maiores, veritatis labore.</p>

                        <p style={aboutpara2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit beatae numquam perferendis magnam dolor vel obcaecati exercitationem, dolorum nostrum rerum nesciunt quam sequi odio quos autem! Quidem dolores distinctio tenetur?
                        </p>

                        <button style={aboutbtn}><a href="../../public/files/Sovan Sundar Dey Resume.pdf" target='_blank'> Know More About Me </a></button>
                        
                    </div>

                </div>
            </div>
            
      </Container>
    );

}

export default About;