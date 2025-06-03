import React from 'react';
import ProgressBarStyle from '../../public/styles/Progressbar.module.css';

function ProgressBar ({state}){

    return (

        <div className={ProgressBarStyle.progressBar} style={{width: `${state}%`}}></div>

    );

}

export default ProgressBar;