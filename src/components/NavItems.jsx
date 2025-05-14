import React from 'react';
import NavbarStyle from '../../public/styles/Navbar.module.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navitem({ logo }) {

    return (
        
        <>
        
            <header className={NavbarStyle.header} >

                <div className={NavbarStyle.container}>

                    <div className={NavbarStyle.logo}> 

                        <h1>{logo}</h1>

                    </div>
                    <div className={NavbarStyle.menu}>

                        <nav>

                            <ul>

                                <li><AnchorLink offset={100} href='#home'> HOME </AnchorLink></li>
                                <li><AnchorLink offset={90} href='#about'> ABOUT  </AnchorLink></li>
                                <li><AnchorLink offset={100} href='#education'> EDUCATION  </AnchorLink></li>
                                <li><AnchorLink offset={100} href='#skills'> SKILLS  </AnchorLink></li>
                                <li><AnchorLink offset={100} href='#experience'> EXPERIENCE  </AnchorLink></li>
                                <li><AnchorLink offset={100} href='#projects'> PROJECTS  </AnchorLink></li>
                                <li><AnchorLink offset={100} href='#contact'> CONTACT  </AnchorLink></li>

                            </ul>

                        </nav>

                    </div>
                    
                </div>

            </header>
            
        </>

    );

}

export default Navitem;