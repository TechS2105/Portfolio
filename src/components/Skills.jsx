import React, {useState, useEffect} from 'react';
import Container from './Container';
import SkillStyle from '../../public/styles/Skills.module.css'; 
import { MdOutlineCodeOff } from "react-icons/md";
import { SiFrontendmentor } from "react-icons/si";
import { SiBackendless } from "react-icons/si";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { GoVersions } from "react-icons/go";
import { BsTools } from "react-icons/bs";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { FaJsSquare } from "react-icons/fa";
import { BiLogoJquery } from "react-icons/bi";
import { RiReactjsLine } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { FiChrome } from "react-icons/fi";
import { FaWordpressSimple } from "react-icons/fa6";
import { SiGithubcopilot } from "react-icons/si";

let logoimage = '/images/icons8-chatgpt-50.png';

function Skills() {

    const [skillFirstHeading, setSkillFirstHeading] = useState({

        transform: "translateY(500px)",
        filter: "blur(20px)",

    });

    const [skillSecondHeading, setSkillSecondHeading] = useState({

        transform: "translateY(500px)",
        filter: "blur(20px)",

    });

    const [skillCodeIcon, setSkillCodeIcon] = useState({

        transform: "scale(0)",
        filter: "blur(20px)",

    });

    const [frontEnd, setFrontEnd] = useState({

        transform: "translateX(-500px)",
        filter: "blur(20px)",

    });

    const [skillName, setSkillName] = useState({

        transform: "translateY(-100px)",

    });

    function handelSkillScroll() {
        
        if(window.innerWidth > 600){

            if(window.scrollY > 3400){

                setSkillFirstHeading({

                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                    transition: "all 0.8s ease"

                });

                setSkillSecondHeading({

                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                    transition: "all 0.8s ease 0.5s"

                });

                setSkillCodeIcon({

                    transform: 'scale(1) rotateY(360deg)',
                    transition: "all 0.8s ease 0.8s",
                    filter: "blur(0px)",

                });

                setFrontEnd({

                    transform: "translateX(0px)",
                    transition: "all 0.8s ease 1s",
                    filter: "blur(0px)",

                });

                setSkillName({

                    transform: "translateY(0px)",
                    transition: "all 0.8s ease 1.1s",

                });

            }else{

                setSkillFirstHeading({

                    transform: "translateY(500px)",
                    filter: "blur(20px)",
                    transition: "all 0.8s ease",

                });

                setSkillSecondHeading({

                    transform: "translateY(500px)",
                    filter: "blur(20px)",
                    transition: 'all 0.8s ease',

                });

                setSkillCodeIcon({

                    transform: "scale(0)",
                    filter: "blur(20px)",
                    transition: "all 0.8s ease",

                });

                setFrontEnd({

                    transform: "translateX(-500px)",
                    transition: "all 0.8s ease",
                    filter: "blur(20px)",

                });

                setSkillName({

                    transform: "translateY(-100px)",
                    transition: "all 0.8s ease",

                })

            }

        }

    }

    useEffect(() => {

        setTimeout(() => {

            window.addEventListener("scroll", handelSkillScroll);

        })

    }, []);
    
    return (

        <Container> 

            <div id="skills" className={SkillStyle.skillContainer} onScroll={handelSkillScroll}>

                <div className={SkillStyle.skillSubContainer1}>

                    <h2 className={SkillStyle.skillsHeading}>

                        <div className={SkillStyle.headingDevideContent}>
                            
                            <span style={skillFirstHeading}>My</span>
                        
                        </div>
                        <div className={SkillStyle.headingDevideContent}>
                            
                            <span style={skillSecondHeading}> Coding <MdOutlineCodeOff style={skillCodeIcon}/> </span>
                        
                        </div>
                        <div className={SkillStyle.headingDevideContent}>
                            
                            <span style={skillFirstHeading}>Expertise</span>
                        
                        </div>

                    </h2>

                </div>
                <div className={SkillStyle.skillSubContainer2}>

                    <div className={SkillStyle.skillSection}>

                        <div className={SkillStyle.frontend}>

                            <h3 style={frontEnd}> <SiFrontendmentor /> Front-End </h3>

                            <div className={SkillStyle.unorderlist}>

                                <ul style={skillName}>

                                    <li> HTML </li>
                                    <li> CSS </li>
                                    <li> JavaScript </li>
                                    <li> JQuery </li>
                                    <li> ReactJS </li>
                                    <li> Bootstrap </li>

                                </ul>

                            </div>

                            <div className={SkillStyle.codeLogo}>

                                <ul>

                                        <li><IoLogoHtml5 /></li>
                                        <li><IoLogoCss3 /></li>
                                        <li><FaJsSquare /></li>
                                        <li><BiLogoJquery /></li>
                                        <li><RiReactjsLine /></li>
                                        <li><FaBootstrap /></li>

                                </ul>
                                
                                <ul>

                                        <li><IoLogoHtml5 /></li>
                                        <li><IoLogoCss3 /></li>
                                        <li><FaJsSquare /></li>
                                        <li><BiLogoJquery /></li>
                                        <li><RiReactjsLine /></li>
                                        <li><FaBootstrap /></li>

                                </ul>

                                <ul>

                                        <li><IoLogoHtml5 /></li>
                                        <li><IoLogoCss3 /></li>
                                        <li><FaJsSquare /></li>
                                        <li><BiLogoJquery /></li>
                                        <li><RiReactjsLine /></li>
                                        <li><FaBootstrap /></li>

                                </ul>

                            </div>

                        </div>
                        <div className={SkillStyle.backend}>

                            <h3 style={frontEnd}> <SiBackendless /> Back-End </h3>

                            <div className={SkillStyle.unorderlist}>

                                <ul style={skillName}>

                                    <li> NodeJS </li>
                                    <li> ExpressJS </li>

                                </ul>

                            </div>

                            <div className={SkillStyle.codeLogo}>

                                <ul>

                                    <li><IoLogoNodejs /></li>
                                    <li><SiExpress /></li>

                                </ul>
                                
                                <ul>

                                    <li><IoLogoNodejs /></li>
                                    <li><SiExpress /></li>

                                </ul>

                                <ul>

                                    <li><IoLogoNodejs /></li>
                                    <li><SiExpress /></li>

                                </ul>

                            </div>

                        </div>
                        <div className={SkillStyle.database}>

                            <h3 style={frontEnd}> <BsDatabaseFillCheck /> Database </h3>

                            <div className={SkillStyle.unorderlist}>

                                <ul style={skillName}>

                                    <li> PostgresSQL</li>
                                    <li> SQL </li>

                                </ul>

                            </div>

                            <div className={SkillStyle.codeLogo}>

                                <ul>

                                    <li><SiPostgresql /></li>
                                    <li><GrMysql /></li>

                                </ul>

                               <ul>

                                    <li><SiPostgresql /></li>
                                    <li><GrMysql /></li>

                                </ul>

                                <ul>

                                    <li><SiPostgresql /></li>
                                    <li><GrMysql /></li>

                                </ul>

                            </div>

                        </div>
                        <div className={SkillStyle.versionControl}>

                            <h3 style={frontEnd}> <GoVersions /> Version Control </h3>

                            <div className={SkillStyle.unorderlist}>

                                <ul style={skillName}>

                                    <li> Git </li>
                                    <li> GitHub </li>

                                </ul>

                            </div>

                            <div className={SkillStyle.codeLogo}>

                                <ul>

                                    <li><FaGit /></li>
                                    <li><FaGithub /></li>

                                </ul>

                                <ul>

                                    <li><FaGit /></li>
                                    <li><FaGithub /></li>

                                </ul>

                                <ul>

                                    <li><FaGit /></li>
                                    <li><FaGithub /></li>

                                </ul>

                            </div>

                        </div>
                        <div className={SkillStyle.tools}>

                            <h3 style={frontEnd}> <BsTools /> Tools </h3>

                            <div className={SkillStyle.unorderlist}>

                                <ul style={skillName}>

                                    <li> VS-Code </li>
                                    <li> Postman </li>
                                    <li> ChromeDev Tools </li>
                                    <li> Wordpress </li>

                                </ul>

                            </div>

                            <div className={SkillStyle.codeLogo}>

                                <ul>

                                    <li><VscVscodeInsiders /></li>
                                    <li><SiPostman /></li>
                                    <li><FiChrome /></li>
                                    <li><FaWordpressSimple /></li>

                                </ul>

                                <ul>

                                    <li><VscVscodeInsiders /></li>
                                    <li><SiPostman /></li>
                                    <li><FiChrome /></li>
                                    <li><FaWordpressSimple /></li>

                                </ul>

                                <ul>

                                    <li><VscVscodeInsiders /></li>
                                    <li><SiPostman /></li>
                                    <li><FiChrome /></li>
                                    <li><FaWordpressSimple /></li>

                                </ul>

                            </div>

                        </div>
                        <div className={SkillStyle.aiTools}>

                            <h3 style={frontEnd}> <GiArtificialIntelligence /> AI Tools </h3>

                            <div className={SkillStyle.unorderlist}>

                                <ul style={skillName}>

                                    <li> GitHub Copilot </li>
                                    <li> ChatGPT </li>

                                </ul>

                            </div>

                            <div className={SkillStyle.codeLogo}>

                                <ul>

                                    <li><SiGithubcopilot /></li>
                                    <li><img src={logoimage} /></li>
                                    
                                </ul>
                                
                                <ul>

                                    <li><SiGithubcopilot /></li>
                                    <li><img src={logoimage} /></li>
                                    
                                </ul>

                                <ul>

                                    <li><SiGithubcopilot /></li>
                                    <li><img src={logoimage} /></li>
                                    
                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </Container>

    );

}

export default Skills;