import React, {useState, useEffect} from 'react';
import EducationStyle from '../../public/styles/Education.module.css';
import Container from './Container';

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
            
            if (window.scrollY > 1300) {
                
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

    const [yearAnimation, setYearAnimation1] = useState({

        transform: "translateY(-500px)",
        filter: "blur(20px)"

    });

    const [firstContentStyle, setFirstContentStyle] = useState({

        transform: "translateX(-1000px)",
        filter: "blur(20px)"

    })

    function subEducationScrollAnimation() {
        
        if (window.innerWidth > 600) {
            
            if (window.scrollY > 1300) {
                
                setYearAnimation1({

                    transform: "translateY(0px)",
                    transition: "all 0.8s ease",
                    zIndex: "2",
                    filter: "blur(0px)"

                });

                setFirstContentStyle({

                    transform: "translateX(0px)",
                    transition: "all 0.8s ease 0.5s",
                    filter: "blur(0px)"

                });

            } else {
                
                setYearAnimation1({

                    transform: "translateY(-500px)",
                    transition: "all 0.8s ease 0.2s",
                    zIndex: "-2",
                    filter: "blur(50px)",

                });

                setFirstContentStyle({

                    transform: "translateX(-1000px)",
                    transition: "all 0.8s ease",
                    filter: "blur(50px)"

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

            <div className={EducationStyle.educationContainer}  id='education' onScroll={educationScrollingAnimation}>

                <div className={EducationStyle.subEducationContainer1} onScroll={subEducationScrollAnimation}>

                    <div className={EducationStyle.educationContent} style={yearAnimation}>

                        <div className={EducationStyle.educationContentBox} style={firstContentStyle}>

                            <h3> Camellia Institute Of Technology & Management </h3>
                            <p> B.Tech on Computer Science and Engineering </p>
                            <p> Bainchi, WestBengal </p>

                        </div>

                    </div>

                    <div className={EducationStyle.educationContent2}>

                        <div className={EducationStyle.educationContentBox2}>

                            <h3> Camellia Institute Of Polytechnic </h3>
                            <p> Diploma on Computer Science and Technology </p>
                            <p> BudBud, WestBengal</p>

                        </div>

                    </div>

                    <div className={EducationStyle.educationContent3}>

                        <div className={EducationStyle.educationContentBox3}>

                            <h3> Memari V.M. Institution Unit-1 </h3>
                            <p> Higher Secondary - <br/> Education </p>
                            <p> Memari, WestBengal </p>

                        </div>

                    </div>

                    <div className={EducationStyle.educationContent4}>

                        <div className={EducationStyle.educationContentBox4}>

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