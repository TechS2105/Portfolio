import React, {useState, useEffect} from 'react';
import ReuseableHeading from './Reuseableheading';

function Reusableheadingcomponent() {

    const [handelReuseableHeading, setHandelReuseableHeading] = useState({

        transform: "translateY(-500px)",
        filter: "blur(50px)"
        
    })

    function handelReuseableHeadingScroll() {
        
        if (window.innerWidth < 600) {
            
            if (window.scrollY > 3800) {
                
                setHandelReuseableHeading({

                    transform: "translateY(0px)",
                    transition: 'all 0.8s ease',
                    filter: "blur(0px)"

                });

            } else {
                
                setHandelReuseableHeading({

                    transform: "translateY(-500px)",
                    transition: "all 0.8s ease",
                    filter: "blur(50px)",

                });
                
            }

        }

    }

    useEffect(() => {

        setTimeout(() => {

            window.addEventListener("scroll", handelReuseableHeadingScroll);

        })

    }, [])
    
    return (

        <ReuseableHeading
        
            skillheading="Programming"
            skillheadingspan="Skills"
            scroll={handelReuseableHeadingScroll}
            state={handelReuseableHeading}
            
        />

    );

}

export default Reusableheadingcomponent;