import React from 'react';
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

let logoimage = '../../public/images/icons8-chatgpt-50.png';

function Skills() {
    
    return (

        <Container> 

            <div id="skills" className={SkillStyle.skillContainer}>

                <div className={SkillStyle.skillSubContainer1}>

                    <h2 className={SkillStyle.skillsHeading}>

                        <div className={SkillStyle.headingDevideContent}>
                            
                            <span>My</span>
                        
                        </div>
                        <div className={SkillStyle.headingDevideContent}>
                            
                            <span> Coding <MdOutlineCodeOff /> </span>
                        
                        </div>
                        <div className={SkillStyle.headingDevideContent}>
                            
                            <span>Expertise</span>
                        
                        </div>

                    </h2>

                </div>
                <div className={SkillStyle.skillSubContainer2}>

                    <div className={SkillStyle.skillSection}>

                        <div className={SkillStyle.frontend}>

                            <h3> <SiFrontendmentor /> Front-End </h3>

                            <div className={SkillStyle.unorderlist}>

                                <ul>

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

                            <h3> <SiBackendless /> Back-End </h3>

                            <div className={SkillStyle.unorderlist}>

                                <ul>

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

                            <h3> <BsDatabaseFillCheck /> Database </h3>

                            <div className={SkillStyle.unorderlist}>

                                <ul>

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

                            <h3> <GoVersions /> Version Control </h3>

                            <div className={SkillStyle.unorderlist}>

                                <ul>

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

                            <h3> <BsTools /> Tools </h3>

                            <div className={SkillStyle.unorderlist}>

                                <ul>

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

                            <h3> <GiArtificialIntelligence /> AI Tools </h3>

                            <div className={SkillStyle.unorderlist}>

                                <ul>

                                    <li> GitHub Copilot </li>
                                    <li> ChatGPT </li>

                                </ul>

                            </div>

                            <div className={SkillStyle.codeLogo}>

                                <ul>

                                    <li><SiGithubcopilot /></li>
                                    <li><img src={logoimage} alt /></li>
                                    
                                </ul>
                                
                                <ul>

                                    <li><SiGithubcopilot /></li>
                                    <li><img src={logoimage} alt /></li>
                                    
                                </ul>

                                <ul>

                                    <li><SiGithubcopilot /></li>
                                    <li><img src={logoimage} alt /></li>
                                    
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