import React, {useState, useEffect} from 'react';
import ResponsiveNavStyle from '../../public/styles/Responsive Style/Responsivenav.module.css';
import ResponsiveNavIcon from '../responsive_components/Responsivenavicon';

let img1 = '/images/responsive nav icon/home-smile-svgrepo-com.svg';
let img2 = '/images/responsive nav icon/about-svgrepo-com.svg';
let img3 = '/images/responsive nav icon/target-svgrepo-com.svg';
let img4 = '/images/responsive nav icon/education-svgrepo-com.svg';
let img5 = '/images/responsive nav icon/portfolio-svgrepo-com.svg';
let img6 = '/images/responsive nav icon/programming-svgrepo-com (1).svg';
let img7 = '/images/responsive nav icon/cloud-service-management-svgrepo-com.svg'
let img8 = '/images/responsive nav icon/certificate-svgrepo-com (1).svg';
let img9 = '/images/responsive nav icon/contact-phone-talking-svgrepo-com.svg';

function Responsivenavitems() {

    const [responsiveNavMenu, setResponsiveNavMenu] = useState({

        transform: "translateY(100px)",
        filter: "blur(20px)",

    });

    function handelResponsiveNavBar() {

        setResponsiveNavMenu({

            transform: "translateY(0px)",
            filter: "blur(0px)",
            transition: "all 0.8s ease 1.4s"

        });
        
    }

    let previousWindowPosition = window.pageYOffset;

    const handelNavOnScroll = React.useCallback(() => {

        const currentWindowPosition = window.pageYOffset;
        
       if(previousWindowPosition > currentWindowPosition){

           setResponsiveNavMenu({
               
               transform: "translateY(0px)",
               filter: "blur(0px)",
               transition: 'all 0.8s ease'
               
           })
           
       } else {
           
           setResponsiveNavMenu({
               
               transform: "translateY(100px)",
               filter: "blur(20px)",
               transition: "all 0.8s ease",
               
           });
           
        }
        
        previousWindowPosition = currentWindowPosition;

    }, []);

    useEffect(() => {

        setTimeout(() => {

            return handelResponsiveNavBar();

        }, 1000);

        window.addEventListener('scroll', handelNavOnScroll);

        return () => {
            window.removeEventListener('scroll', handelNavOnScroll);
        };

    }, [handelNavOnScroll]);
    
    return (

        <>
        
            <div className={ResponsiveNavStyle.mobileHeader} onLoad={handelResponsiveNavBar} style={responsiveNavMenu} onScroll={handelNavOnScroll} >

                <div className={ResponsiveNavStyle.background}>
                    
                    <nav className={ResponsiveNavStyle.resNav}>
                        
                        <ResponsiveNavIcon
                        
                            icon={img1}
                            id='#home'
                            
                        />

                        <ResponsiveNavIcon
                        
                            icon={img2}
                            id="#about"
                            
                        />

                        <ResponsiveNavIcon
                        
                            icon={img3}
                            id="#experience"
                        
                        />
                        <ResponsiveNavIcon
                        
                            icon={img4}
                            id="#education"
                        
                        />
                        <ResponsiveNavIcon
                        
                            icon={img5}
                            id="#projects"
                        
                        />
                        <ResponsiveNavIcon
                        
                            icon={img6}
                            id="#skills"
                        
                        />
                        <ResponsiveNavIcon
                        
                            icon={img7}
                            id="#services"
                        
                        />
                        <ResponsiveNavIcon
                        
                            icon={img8}
                            id="#certification"
                        
                        />
                        <ResponsiveNavIcon
                        
                            icon={img9}
                            id="#contact"
                        
                        />

                    </nav>

                </div>

            </div>
        
        </>

    )

}

export default Responsivenavitems;