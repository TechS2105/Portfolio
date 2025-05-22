import React from 'react';
import Container from './Container';
import CertificationStyle from '../../public/styles/Certifications.module.css';
import CertificationList from './Certificationlist';

function Certifications(){

    return (

       <Container>

            <div className={CertificationStyle.certificationContainerStyle} id='certification'>

                <div className={CertificationStyle.certificationSubContainer1}>

                   <CertificationList />

                </div>

                <div className={CertificationStyle.certificationSubContainer2}>

                    <div className={CertificationStyle.certificationName}>

                        <h2>

                            <div className={CertificationStyle.certificationHeading1}>

                                <span> My </span>

                            </div>
                            <div className={CertificationStyle.certificationHeading2}>

                                <span> Certified </span>

                            </div>
                            <div className={CertificationStyle.certificationHeading3}>

                                <span> Knowledge  </span>

                            </div>

                        </h2>
                        
                    </div>

                </div>

            </div>

       </Container>

    );

}

export default Certifications;