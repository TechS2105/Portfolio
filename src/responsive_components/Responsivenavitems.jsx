import React from 'react';
import ResponsiveNavStyle from '../../public/styles/Responsive Style/Responsivenav.module.css';
import ResponsiveNavIcon from '../responsive_components/Responsivenavicon';

let img1 = '../../public/images/responsive icon/home (1).png';
let img2 = '../../public/images/responsive icon/information.png';
let img3 = '../../public/images/responsive icon/quality.png';
let img4 = '../../public/images/responsive icon/graduate.png';
let img5 = '../../public/images/responsive icon/portfolio.png';
let img6 = '../../public/images/responsive icon/leadership-skills.png';
let img7 = '../../public/images/responsive icon/service.png';
let img8 = '../../public/images/responsive icon/online-certificate.png';
let img9 = '../../public/images/responsive icon/contact-mail.png';

function Responsivenavitems() {
    
    return (

        <>
        
            <div className={ResponsiveNavStyle.mobileHeader}>

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