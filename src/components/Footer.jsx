import React from 'react';
import FooterStyle from '../../public/styles/Footer.module.css';

let date = new Date().getFullYear();

function Footer() {
    
    return (

        <footer className={FooterStyle.footerContainer}>

            <div className={FooterStyle.footerCopyright}>

                <p> Copyright @{date} All Rights Reserved </p>

            </div>

            <div className={FooterStyle.footerContent}>
                
                <p> SSD </p>
            
            </div>

            <div className={FooterStyle.footerContent}>
                
               
            
            </div>

        </footer>

    );

}

export default Footer;