import React, {useState, useEffect} from 'react';
import ResponsiveCertificateStyle from '../../public/styles/Responsive Style/Responsivecertificateheading.module.css';
import ResponsiveCertificateHeadingComponent from '../responsive_components/Responsivecertificateheadingcomponent';

function Responsivecertificateheading() {

    const [responsiveCertificateHeading, setResponsiveCertificateHeading] = useState({

        transform: 'translateY(-500px)',
        filter: "blur(20px)",

    });

    function handelResponsiveCertificateHeading() {
        
        if (window.innerWidth < 600) {
            
            if (window.scrollY > 5300) {
                
                setResponsiveCertificateHeading({

                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                    transition: "all 0.8s ease"

                });

            } else {
                
                setResponsiveCertificateHeading({

                    transform: "translateY(-500px)",
                    transition: "all 0.8s ease",
                    filter: 'blur(20px)',

                });

            }

        }

    }

    useEffect(() => {

        setTimeout(() => {

            window.addEventListener('scroll', handelResponsiveCertificateHeading);

        })

    }, []);
    
    return (

        <div className={ResponsiveCertificateStyle.certificateHeading} onScroll={handelResponsiveCertificateHeading}>
            
            <ResponsiveCertificateHeadingComponent
            
                heading1 = "Certified"
                heading2="Knowledge"
                state={responsiveCertificateHeading}
                
            />

        </div>
        
    );

}

export default Responsivecertificateheading;