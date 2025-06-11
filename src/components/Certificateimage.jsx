import React, {useState, useEffect} from 'react';
import CertificateImage from '../../public/styles/Certificationimages.module.css'

function Certificateimage(props) {

    const [certificateImageAnime, setCertificateImageAnime] = useState({

        transform: "scale(0)",
        filter: "blur(20px)",

    })

    function handelCertificateImageScroll() {
        
        if (window.innerWidth > 600) {
            
            if (window.scrollY > 4800) {
                
                setCertificateImageAnime({

                    transform: "scale(1)",
                    transition: "all 0.8s ease 1s",
                    filter: "blur(0px)",

                });

            } else {
                
                setCertificateImageAnime({

                    transform: "scale(0)",
                    transition: 'all 0.8s ease',
                    filter: "blur(20px)",

                })

            }

        } else if (window.innerWidth < 600) {
            
            if (window.scrollY > 5600) {
                
                setCertificateImageAnime({

                    transform: "scale(1)",
                    transition: "all 0.8s ease",
                    filter: "blur(0px)",

                });

            } else {
                
                setCertificateImageAnime({

                    transform: "scale(0)",
                    transition: 'all 0.8s ease',
                    filter: "blur(20px)",

                });

            }

        }

    }

    useEffect(() => {

        setTimeout(() => {

            window.addEventListener('scroll', handelCertificateImageScroll);

        })

    }, []);
    
    return (

        <div className={CertificateImage.certificateImageStyle} onScroll={handelCertificateImageScroll}>

            <a href={props.imagelink} target='_blank'> <img src={props.image} alt={props.image} style={certificateImageAnime}/> </a>

        </div>

    );

}

export default Certificateimage;