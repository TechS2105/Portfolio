import React from 'react';
import ResponsiveNavIconStyle from '../../public/styles/Responsive Style/Responsivenavicon.module.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Responsivenavicon({icon, id}) {
    
    return (
        
        <ul className={ResponsiveNavIconStyle.resNavUl}>

            <li><AnchorLink offset={90} href={id}><img src={icon} alt={icon} /></AnchorLink></li>

        </ul>

    );

}

export default Responsivenavicon;