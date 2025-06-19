import React from 'react';
import FooterStyle from '../../public/styles/Footer.module.css';
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

let date = new Date().getFullYear();

function Footer() {
    
    return (

        <footer className={FooterStyle.footerContainer}>

            <div className={FooterStyle.footerCopyright}>

                <p> Copyright &copy; {date} </p>

            </div>

            <div className={FooterStyle.footerContent}>
                
                <p> SSD </p>
            
            </div>

            <div className={FooterStyle.footerLogo}>
                
                <a href="https://www.linkedin.com/in/sovan-sundar-dey-3b3a61238/" target="_blank"> <FaLinkedinIn /> </a>
                <a href="https://github.com/TechS2105" target="_blank"> <FiGithub /> </a>
            
            </div>

        </footer>

    );

}

export default Footer;