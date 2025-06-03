import React, {useState, useEffect} from 'react';
import ProgressBar from '../components/Progressbar';
import ProgressBarContainerStyle from '../../public/styles/Progressbarcontainer.module.css';

function ProgressBarContainer() {

    const [progressBarHandler, setProgressBarHandler] = useState(0);

    function handelProgressBar() {
        
        const totalDocumentheight = document.body.scrollHeight;
        const currentScroll = window.pageYOffset;
        const totalScroll = Math.floor((currentScroll / totalDocumentheight) * 115);

        setProgressBarHandler(totalScroll);

    }

    useEffect(() => {

        document.addEventListener("scroll", handelProgressBar);

    }, [])
    
    return (

        <div onScroll={handelProgressBar} className={ProgressBarContainerStyle.progressbarContainer}>

            <ProgressBar
            
                state={progressBarHandler}
                
            />

        </div>

    );

}

export default ProgressBarContainer;