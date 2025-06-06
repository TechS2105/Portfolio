import React, {useState, useEffect} from 'react';
import NavbarStyle from '../../public/styles/Navbar.module.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ProgressBarContainer from '../components/Progressbarcontainer';

function Navitem({ logo }) {

    const [logoStyle, setLogoStyle] = useState({

        transform: "translateX(-700px)",
        filter: "blur(50px)",

    });

    const [mobileLogoStyle, setMobileLogoStyle] = useState({

        transform: "scale(0)",
        filter: "blur(20px)",

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
        filter: "blur(20px)"

    });

    const [list8, setList8] = useState({

        transform: "scale(0)",
        filter: "blur(20px)",

    });

    const [list9, setList9] = useState({

        transform: "scale(0)",
        filter: "blur(20px)",

    });

    function handelLoadAnimation() {

        if (window.innerWidth > 600) {

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
                filter: "blur(0px)",

            });

            setList8({

                transform: "scale(1)",
                transition: "all 0.5s ease 1.6s",
                filter: "blur(0px)",

            });

            setList9({

                transform: "scale(1)",
                transition: "all 0.5s ease 1.7s",
                filter: "blur(0px)",

            });
            
        } else if (window.innerWidth < 600) {
            
            setMobileLogoStyle({

                transform: "scale(1)",
                filter: "blur(0px)",
                transition: "all 0.8s ease",

            });

        }

   }

    function handelMobileHeaderLogo() {
        
        setMobileLogoStyle({

            transform: 'scale(1)',
            transition: 'all 0.8s ease',
            filter: "blur(0px)",

        });

    }
    
    useEffect(() => {

        setTimeout(() => {

            return handelLoadAnimation();

        }, 1800);

        setTimeout(() => {

            return handelMobileHeaderLogo();

        }, 500);

    }, []);

    return (
        
        <>
        
            <header className={NavbarStyle.header} onLoad={handelLoadAnimation}>

                <div className={NavbarStyle.container}>

                    <div className={NavbarStyle.logo}> 

                        <h1 style={logoStyle} id={NavbarStyle.desktoplogo}>
                            
                            <AnchorLink offset={100} href='#home' className={NavbarStyle.logoLinkStyle}>
                                
                                {logo}
                            
                            </AnchorLink>

                        </h1>

                    </div>
                    <div className={NavbarStyle.menu}>

                        <nav>

                            <ul className={NavbarStyle.unorderNavList}>

                                <li style={list1}><AnchorLink offset={100} href='#home'> HOME </AnchorLink></li>

                                <li style={list2}><AnchorLink offset={90} href='#about'> ABOUT  </AnchorLink></li>
                                <li style={list3}><AnchorLink offset={90} href='#experience'> EXPERIENCE  </AnchorLink></li>
                                <li style={list4}><AnchorLink offset={90} href='#education'> EDUCATION  </AnchorLink></li>
                                <li style={list5}><AnchorLink offset={90} href='#projects'> PORTFOLIO  </AnchorLink></li>
                                <li style={list6}><AnchorLink offset={90} href='#skills'> SKILLS  </AnchorLink></li>
                                <li style={list7}><AnchorLink offset={90} href='#services'> SERVICES</AnchorLink></li>
                                <li style={list8}><AnchorLink offset={90}  href='#certification'> CERTIFICATIONS </AnchorLink></li>
                                <li style={list9}><AnchorLink offset={90} href='#contact'> CONTACT  </AnchorLink></li>

                            </ul>

                        </nav>

                    </div>
                    
                </div>

            </header>

            <ProgressBarContainer />

            <header className={NavbarStyle.mobileHeader} onLoad={handelMobileHeaderLogo}>

                <h1 style={mobileLogoStyle} id={NavbarStyle.mobilelogo}>

                    <AnchorLink offset={100} href='#home' className={NavbarStyle.mobileLogoLinkStyle}>

                        {logo}

                    </AnchorLink>

                </h1>

            </header>
            
        </>

    );

}

export default Navitem;