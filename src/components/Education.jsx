import React, {useState, useEffect} from 'react';
import EducationStyle from '../../public/styles/Education.module.css';
import Container from './Container';
import ResponsiveEducationHeading from '../responsive_components/Responsiveeducationheading';

function Education() {

    const [spanEducationHeading1, setSpanEducationHeading1] = useState({

        transform: "translateY(500px)",
        filter: "blur(50px)",

    });
    const [spanEducationHeading2, setSpanEducationHeading2] = useState({

        transform: "translateX(-1000px)",
        filter: "blur(50px)",

    });
    const [spanEducationHeading3, setSpanEducationHeading3] = useState({

        transform: "translateY(500px)",
        filter: "blur(50px)",

    });

    function educationScrollingAnimation() {
        
        if (window.innerWidth > 600) {
            
            if (window.scrollY > 2000) {
                
                setSpanEducationHeading1({

                    transform: "translateY(0px)",
                    transition: "all 0.8s ease",
                    filter: "blur(0px)"

                });

                setSpanEducationHeading2({

                    transform: "translateY(0px)",
                    transition: "all 0.8s ease 0.2s",
                    filter: "blur(0px)",
                    backgroundColor: "#292929",
                    color: "#fcfaea",
                    padding: "0px 20px",
                    boxShadow: "10px 5px 50px #3d1d0b"

                });

                setSpanEducationHeading3({

                    transform: "translateY(0px)",
                    transition: "all 0.8s ease 0.3s",
                    filter: "blur(0px)",

                });

            } else {
            
                setSpanEducationHeading1({

                    transform: "translateY(500px)",
                    transition: "all 0.8s ease 0.2s",
                    filter: "blur(50px)",

                });

                setSpanEducationHeading2({

                    transform: "translateX(-1000px)",
                    transition: "all 0.8s ease 0.1s",
                    filter: "blur(50px)",

                });

                setSpanEducationHeading3({

                    transform: "translateY(500px)",
                    transition: "all 0.8s ease ",
                    filter: "blur(50px)"

                })
                
            }

        }

    }

    const [yearAnimation1, setYearAnimation1] = useState({

        transform: "translateY(-500px)",
        filter: "blur(20px)"

    });

    const [firstContentStyle, setFirstContentStyle] = useState({

        transform: "translateX(-1000px)",
        filter: "blur(20px)"

    });

    const [yearAnimation2, setYearAnimation2] = useState({

        transform: "translateY(-1000px)",
        filter: "blur(20px)"

    });

    const [secondContentStyle, setSecondContentStyle] = useState({

        transform: "translateX(1000px)",
        filer: "blur(20px)"

    });

    const [yearAnimation3, setYearAnimation3] = useState({

        transform: "translateY(-1500px)",
        filter: "blur(50px)",

    });

    const [thirdContentStyle, setThirdContentStyle] = useState({

        transform: "translateX(-500px)",
        filter: "blur(50px)",

    });

    const [yearAnimation4, setYearAnimation4] = useState({

        transform: "translateY(-2000px)",
        filter: "blur(50px)"

    });

    const [fourthContentStyle, setFourthContentStyle] = useState({

        transform: "translateX(1000px)",
        filter: "blur(50px)",

    })

    function subEducationScrollAnimation() {
        
        if (window.innerWidth > 600) {
            
            if (window.scrollY > 2000) {
                
                // first year section 
                setYearAnimation1({

                    transform: "translateY(0px)",
                    transition: "all 0.8s ease 0.5s",
                    zIndex: "2",
                    filter: "blur(0px)"

                });

                setFirstContentStyle({

                    transform: "translateX(0px)",
                    transition: "all 0.8s ease 2s",
                    filter: "blur(0px)"

                });

                // second year section
                setYearAnimation2({

                    transform: "translateY(0px)",
                    transition: "all 0.8s ease 0.8s",
                    filter: "blur(0px)",
                    zIndex: 2

                });

                setSecondContentStyle({

                    transform: "translateX(0px)",
                    transition: "all 0.8s ease 2s"

                });

                // third year section
                setYearAnimation3({

                    transform: "translateY(0px)",
                    transition: "all 0.8s ease 1.1s",
                    filter: "blur(0px)",
                    zIndex: "2"

                });

                setThirdContentStyle({

                    transform: "translateX(0px)",
                    filter: "blur(0px)",
                    transition: "all 0.8s ease 2s",

                });

                // fourth year section
                setYearAnimation4({

                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                    zIndex: "2",
                    transition: "all 0.8s ease 1.4s"

                });

                setFourthContentStyle({

                    transform: "translateX(0px)",
                    filter: "blur(0px)",
                    transition: "all 0.8s ease 2s"

                })

            } else {
                
                // first year section
                setYearAnimation1({

                    transform: "translateY(-500px)",
                    transition: "all 0.8s ease",
                    zIndex: "-2",
                    filter: "blur(50px)",

                });

                setFirstContentStyle({

                    transform: "translateX(-1000px)",
                    transition: "all 0.8s ease",
                    filter: "blur(50px)",

                });

                // second year section
                setYearAnimation2({

                    transform: "translateY(-1000px)",
                    transition: "all 0.8s ease 0.2s",
                    filter: "blur(50px)",
                    zIndex: "2"

                });

                setSecondContentStyle({

                    transform: "translateX(1000px)",
                    transition: "all 0.8s ease",
                    filter: "blur(50px)"

                });

                // third year section
                setYearAnimation3({

                    transform: "translateY(-1500px)",
                    transition: "all 0.8s ease 0.3s",
                    filter: "blur(50px)",
                    zIndex: "2"

                });

                setThirdContentStyle({

                    transform: "translateX(-500px)",
                    transition: "all 0.8s ease",
                    filter: "blur(50px)"

                });

                // fourth year section
                setYearAnimation4({

                    transform: "translateY(-2000px)",
                    transition: "all 0.8s ease 0.4s",
                    zIndex: "2",
                    filter: "blur(50px)",

                });

                setFourthContentStyle({

                    transform: "translateX(1000px)",
                    transition: "all 0.8s ease",
                    filter: "blur(50px)",

                });

            }

        }

    }

    useEffect(() => {

        setTimeout(() => {

            window.addEventListener("scroll", educationScrollingAnimation);
            window.addEventListener("scroll", subEducationScrollAnimation);

        })

    }, [])
    
    return (

        <Container>

            <ResponsiveEducationHeading />

            <div className={EducationStyle.educationContainer}  id='education' onScroll={educationScrollingAnimation}>

                <div className={EducationStyle.subEducationContainer1} onScroll={subEducationScrollAnimation}>

                    {/** First year box */}
                    <div className={EducationStyle.educationContent} style={yearAnimation1}>

                        <div className={EducationStyle.educationContentBox} style={firstContentStyle}>

                            <h3> Camellia Institute Of Technology & Management </h3>
                            <p> B.Tech on Computer Science and Engineering </p>
                            <p> Bainchi, WestBengal </p>

                        </div>

                    </div>

                    {/** Second year box */}
                    <div className={EducationStyle.educationContent2} style={yearAnimation2}>

                        <div className={EducationStyle.educationContentBox2} style={secondContentStyle}>

                            <h3> Camellia Institute Of Polytechnic </h3>
                            <p> Diploma on Computer Science and Technology </p>
                            <p> BudBud, WestBengal</p>

                        </div>

                    </div>

                    {/** Third year box */}
                    <div className={EducationStyle.educationContent3} style={yearAnimation3}>

                        <div className={EducationStyle.educationContentBox3} style={thirdContentStyle}>

                            <h3> Memari V.M. Institution Unit-1 </h3>
                            <p> Higher Secondary - <br/> Education </p>
                            <p> Memari, WestBengal </p>

                        </div>

                    </div>

                    {/** Fourth year box */}
                    <div className={EducationStyle.educationContent4} style={yearAnimation4}>

                        <div className={EducationStyle.educationContentBox4} style={fourthContentStyle}>

                            <h3> Memari V.M. Institution Unit-1 </h3>
                            <p> Secondary Education  </p>
                            <p> Memari, WestBengal</p>

                        </div>

                    </div>

                </div>

                <div className={EducationStyle.subEducationContainer2}>

                    <h2 className={EducationStyle.educationHeading}>
                        
                        <div className={EducationStyle.spanNameBox}>

                            <span style={spanEducationHeading1}> My </span>

                        </div>
                    
                        <div className={EducationStyle.spanNameBox}>

                        <span style={spanEducationHeading2}> Education </span>

                        </div>
                        
                        <div className={EducationStyle.spanNameBox}>

                            <span style={spanEducationHeading3}> Qualifications </span>

                        </div>
                    
                    </h2>

                </div>
                
            </div>

        </Container>

    );

}

export default Education;