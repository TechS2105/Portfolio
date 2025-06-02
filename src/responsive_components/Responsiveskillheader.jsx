import React from 'react';
import ReuseableHeadingComponent from './Reuseableheadingcomponent';
import ResponsiveSkillHeaderStyle from '../../public/styles/Responsive Style/Responsiveskillheader.module.css'

function Responsiveskillheader() {
    
    return (

        <div className={ResponsiveSkillHeaderStyle.skillHeadingCompo}>

            <ReuseableHeadingComponent />

        </div>


    );

}

export default Responsiveskillheader;