import React, {useState} from 'react';
import HomeStyle from '../../public/styles/Home.module.css';
import Container from '../components/Container';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

let image = "../../public/images/image2.jpg";

function Home() {


    
    return (

       <Container>
            
            <div className={HomeStyle.container} id='home'>

                <div className={HomeStyle.container1}>

                    <div className={HomeStyle.textsection}>

                        <span> Hello,</span>
                        <h1> I'm Sovan Sundar Dey </h1><br/>
                        <p> Full Stack Developer |  Wordpress Developer </p>

                        <div className={HomeStyle.sociallinks}>

                            <a href="https://www.linkedin.com/in/sovan-sundar-dey-3b3a61238/" target="_blank"><FaLinkedinIn /></a>
                            <a href="https://github.com/TechS2105" target="_blank"><FaGithub /></a>
                            <a href="#"><BiLogoGmail /></a>

                        </div>

                    </div>

                </div>
                <div className={HomeStyle.container2}>

                    <img src={image} alt />

                </div>

            </div>


       </Container>

    )

}

export default Home;