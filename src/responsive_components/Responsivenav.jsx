import React from 'react';
import ResponsiveNavItems from '../responsive_components/Responsivenavitems';

const responsiveNav = {

    position: "fixed",
    bottom: "0",
    zIndex: "9999999"

}

function Responsivenav() {
    
    return (

        <div style={responsiveNav}>

            <ResponsiveNavItems/>

        </div>
        

    );

}

export default Responsivenav;