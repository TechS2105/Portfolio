import React, {useState, useEffect} from 'react';
import NavbarStyle from '../../public/styles/Navbar.module.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navitem({ logo }) {

    const [logoStyle, setLogoStyle] = useState({

        transform: "translateX(-700px)",
        filter: "blur(50px)",

    });

    const [list1, setList1] = useState({

        transform: "scale(0)",
        filter: "blur(20px)"

    });
    const [list2, setList2] = useState({

        transform: "scale(0)",
        filter: "blur(20px)",

    });
    const [list3, setList3] = useState({

        transform: "scale(0)",
        filter: "blur(20px)",

    });
    const [list4, setList4] = useState({

        transform: "scale(0)",
        filter: "blur(20px)",

    });
    const [list5, setList5] = useState({

        transform: "scale(0)",
        filter: "blur(20px)",

    });
    const [list6, setList6] = useState({

        transform: "scale(0)",
        filter: "blur(20px)",

    });
    const [list7, setList7] = useState({

        transform: "scale(0)",
        filter: "blur(20px)",

    });

    function handelLoadAnimation() {
       
        useEffect(() => {

            setTimeout(() => {

                setLogoStyle({
                  transform: "translateX(0px)",
                  transition: "all 0.8s ease",
                  filter: "blur(0px)",
                  color: "#e8b327",
                });

                setList1({

                    transform: "scale(1)",
                    transition: "all 0.5s ease 0.2s",
                    filter: "blur(0px)"

                });

                setList2({

                    transform: "scale(1)",
                    transition: "all 0.5s ease 0.4s",
                    filter: "blur(0px)",

                });

                setList3({

                    transform: "scale(1)",
                    transition: "all 0.5s ease 0.6s",
                    filter: "blur(0px)",

                });

                setList4({

                    transform: "scale(1)",
                    transition: "all 0.5s ease 0.8s",
                    filter: "blur(0px)"

                });

                setList5({

                    transform: "scale(1)",
                    transition: "all 0.5s ease 1s",
                    filter: "blur(0px)"

                });

                setList6({

                    transform: "scale(1)",
                    transition: 'all 0.5s ease 1.2s',
                    filter: "blur(0px)",

                });

                setList7({

                    transform: "scale(1)",
                    transition: "all 0.5s ease 1.4s",
                    filter: "blur(0px)"

                });

            }, 1800)

        }, [])

   }

    return (
        
        <>
        
            <header className={NavbarStyle.header} onLoad={handelLoadAnimation()}>

                <div className={NavbarStyle.container}>

                    <div className={NavbarStyle.logo}> 

                        <h1 style={logoStyle}>
                            
                            <AnchorLink offset={100} href='#home' className={NavbarStyle.logoLinkStyle}>
                                
                                {logo}
                            
                            </AnchorLink>

                        </h1>

                    </div>
                    <div className={NavbarStyle.menu}>

                        <nav>

                            <ul>

                                <li style={list1}><AnchorLink offset={100} href='#home'> HOME </AnchorLink></li>
                                <li style={list2}><AnchorLink offset={90} href='#about'> ABOUT  </AnchorLink></li>
                                <li style={list3}><AnchorLink offset={90} href='#education'> EDUCATION  </AnchorLink></li>
                                <li style={list4}><AnchorLink offset={90} href='#skills'> SKILLS  </AnchorLink></li>
                                <li style={list5}><AnchorLink offset={90} href='#experience'> EXPERIENCE  </AnchorLink></li>
                                <li style={list6}><AnchorLink offset={90} href='#projects'> PROJECTS  </AnchorLink></li>
                                <li style={list7}><AnchorLink offset={90} href='#contact'> CONTACT  </AnchorLink></li>

                            </ul>

                        </nav>

                    </div>
                    
                </div>

            </header>
            
        </>

    );

}

export default Navitem;