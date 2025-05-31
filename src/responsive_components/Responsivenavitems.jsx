import React, {useState, useEffect} from 'react';
import ResponsiveNavStyle from '../../public/styles/Responsive Style/Responsivenav.module.css';
import ResponsiveNavIcon from '../responsive_components/Responsivenavicon';

let img1 = '/images/responsive icon/home (1).png';
let img2 = '/images/responsive icon/information.png';
let img3 = '/images/responsive icon/quality.png';
let img4 = '/images/responsive icon/graduate.png';
let img5 = '/images/responsive icon/portfolio.png';
let img6 = '/images/responsive icon/leadership-skills.png';
let img7 = '/images/responsive icon/service.png';
let img8 = '/images/responsive icon/online-certificate.png';
let img9 = '/images/responsive icon/contact-mail.png';

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

    useEffect(() => {

        setTimeout(() => {

            return handelResponsiveNavBar();

        }, 1000)


    }, []);
    
    return (

        <>
        
            <div className={ResponsiveNavStyle.mobileHeader} onLoad={handelResponsiveNavBar} style={responsiveNavMenu}>

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