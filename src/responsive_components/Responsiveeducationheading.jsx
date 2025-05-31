import React from 'react';
import ResponsiveEducationHeadingStyle from '../../public/styles/Responsive Style/Responsiveeducationheading.module.css'

function ResponsiveEducationHeading() {
    
    return (

        <>
        
            <div className={ResponsiveEducationHeadingStyle.responsiveEducationHeading}>

                <div className={ResponsiveEducationHeadingStyle.responsiveHeadingName}>

                    <h2> Education <span className={ResponsiveEducationHeadingStyle.responsiveEducationHeadingSpan}>Qualification </span> </h2>

                </div>

            </div>
            
        </>

    );

}

export default ResponsiveEducationHeading;