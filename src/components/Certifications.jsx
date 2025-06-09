import React, {useState, useEffect} from 'react';
import Container from './Container';
import CertificationStyle from '../../public/styles/Certifications.module.css';
import CertificationList from './Certificationlist';
import ResponsiveCertificateHeading from '../responsive_components/Responsivecertificateheading';

function Certifications() {

    const [certificationHeadingAnime1, setCertificationHeadingAnime1] = useState({

        transform: "translateX(-500px) scale(0)",
        filter: "blur(20px)",

    });

    const [certificationHeadingAnime2, setCertificationHeadingAnime2] = useState({

        transform: "translateX(1000px) scale(0)",
        filter: "blur(20px)",

    });
    const [certificationHeadingAnime3, setCertificationHeadingAnime3] = useState({

        transform: "translateX(-1500px) scale(0)",
        filter: "blur(20px)",

    });

    
    function handelCertificationScroll() {
        
        if (window.innerWidth > 600) {
            
            if(window.scrollY > 4800){

                setCertificationHeadingAnime1({

                    transform: "translateX(0px) scale(1)",
                    transition: "all 0.8s ease",
                    filter: "blur(0px)",

                });

                setCertificationHeadingAnime2({

                  transform: "translateX(0px) scale(1)",
                  transition: "all 0.8s ease 0.3s",
                  filter: "blur(0px)",
                  backgroundColor: "#292929",
                  padding: "0px 20px",
                  color: "#fcfaea",
                  boxShadow: "10px 5px 50px #3d1d0b",
                  border: "5px solid #fcfaea",
                  
                });

                setCertificationHeadingAnime3({

                    transform: "translateX(0px) scale(1)",
                    transition: "all 0.8s ease 0.6s",
                    filter: "blur(0px)"

                });


            } else {
                
                setCertificationHeadingAnime1({

                    transform: "translateX(-500px) scale(0)",
                    transition: 'all 0.8s ease',
                    filter: "blur(20px)",

                });

                setCertificationHeadingAnime2({

                    transform: "translateX(1000px) scale(0)",
                    transition: "all 0.8s ease",
                    filter: "blur(20px)",

                });

                setCertificationHeadingAnime3({

                    transform: "translateX(-1500px) scale(0)",
                    transition: "all 0.8s ease",
                    filter: "blur(20px)",

                });


            }

        }

    }

    useEffect(() => {

        setTimeout(() => {

            window.addEventListener('scroll', handelCertificationScroll);

        })

    }, []);

    return (

       <Container>

            <div className={CertificationStyle.certificationContainerStyle} id='certification' onScroll={handelCertificationScroll}>

                <ResponsiveCertificateHeading />

                <div className={CertificationStyle.certificationSubContainer1}>

                   <CertificationList />

                </div>

                <div className={CertificationStyle.certificationSubContainer2}>

                    <div className={CertificationStyle.certificationName}>

                        <h2 className={CertificationStyle.certificationHeading}>

                            <div className={CertificationStyle.certificationTextHeading}>

                                <span style={certificationHeadingAnime1}> My </span>

                            </div>
                            <div className={CertificationStyle.certificationTextHeading}>

                                <span style={certificationHeadingAnime2}> Certified </span>

                            </div>
                            <div className={CertificationStyle.certificationTextHeading}>

                                <span style={certificationHeadingAnime3}> Knowledge  </span>

                            </div>

                        </h2>
                        
                    </div>

                </div>

            </div>

       </Container>

    );

}

export default Certifications;