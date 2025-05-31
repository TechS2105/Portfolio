import React from 'react';
import ResponsiveEducationHeadingStyle from '../../public/styles/Responsive Style/Responsiveeducationheading.module.css'

function ResponsiveEducationHeading({handelScrollResponsiveEducationSection, state}) {
    
    return (

        <>
        
            <div className={ResponsiveEducationHeadingStyle.responsiveEducationHeading} onScroll={handelScrollResponsiveEducationSection}>

                <div className={ResponsiveEducationHeadingStyle.responsiveHeadingName} style={state}>

                    <h2> Education <span className={ResponsiveEducationHeadingStyle.responsiveEducationHeadingSpan}>Qualification </span> </h2>

                </div>

            </div>
            
        </>

    );

}

export default ResponsiveEducationHeading;