import React from 'react';
import ReuseableHeadingStyle from '../../public/styles/Responsive Style/Reusableheading.module.css';

function Reuseableheading(props) {
    
    return (

        <div className={ReuseableHeadingStyle.reuseableheading} onScroll={props.scroll}>

            <h2 style={props.state}>{props.skillheading} <span>{props.skillheadingspan}</span> </h2>

        </div>


    );

}

export default Reuseableheading;