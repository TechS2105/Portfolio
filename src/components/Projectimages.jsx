import React, {useState} from 'react';
import ProjectImageStyle from '../../public/styles/Projectimage.module.css';

function ProjectImage({ image, imagelink }) {

    const [scrollImageAnimation, setScrollImageAnimation] = useState({

        transform: "translateY(0px)",

    });

    function handelMouseOver() {
        
        setScrollImageAnimation({

            transform: "translateY(calc(100vh - 118%))",
            transition: "all 5s ease"

        });

    }

    function handelMouseOut() {
        
        setScrollImageAnimation({

            transform: "translateY(0px)",
            transition: "all 5s ease",

        })

    }

    return (

        <div className={ProjectImageStyle.imageDiv} onMouseOver={handelMouseOver} onMouseOut={handelMouseOut}>

                <a href={imagelink} target='_blank'><img src={image} alt={image} className={ProjectImageStyle.projectImages} style={scrollImageAnimation} /></a>
                
        </div>

    );

}

export default ProjectImage;