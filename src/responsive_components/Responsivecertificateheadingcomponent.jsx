import React from 'react';
import ResponsiveCertificateHeadingComponentStyle from '../../public/styles/Responsive Style/ResponsiveCertificateHeadingComponent.module.css' 

function Responsivecertificateheadingcomponent({heading1, heading2, state}) {
    
    return (

        <h2 className={ResponsiveCertificateHeadingComponentStyle.certificateComponent} style={state}> {heading1} <span className={ResponsiveCertificateHeadingComponentStyle.certificateComponentSpan}> {heading2} </span> </h2>

    );

}

export default Responsivecertificateheadingcomponent;