import React, {useState, useEffect} from 'react';
import Container from '../components/Container';
import ServiceStyle from '../../public/styles/Services.module.css';
import Service from '../objects/Services';

function Services() {

    const [serviceHeadingAnime, setServiceHeadingAnime] = useState({

        transform: "translateY(-500px)",
        filter: "blur(20px)",

    });

    const [secondSubServiceContainerAnime, setSecondSubServiceContainerAnime] = useState({

        transform: "translateY(1000px) scale(0)",
        filter: "blur(20px)",

    });

    function handelServiceScroll() {
        
        if (window.innerWidth > 600) {
            
            if (window.scrollY > 4000) {
                
                setServiceHeadingAnime({

                    transform: "translateY(0px)",
                    transition: "all 0.8s ease",
                    filter: "blur(0px)",

                });

                setSecondSubServiceContainerAnime({

                    transform: "translateY(0px) scale(1)",
                    transition: "all 0.8s ease", 
                    filter: "blur(0px)",

                })

            } else {
                
                setServiceHeadingAnime({

                    transform: "translateY(-500px)",
                    transition: "all 0.8s ease",
                    filter: "blur(20px)",

                });

                setSecondSubServiceContainerAnime({

                    transform: "translateY(1000px) scale(0)",
                    transition: "all 0.8s ease",
                    filter: "blur(20px)",

                })

            }

        }

    }

    useEffect(() => {

        setTimeout(() => {

            window.addEventListener("scroll", handelServiceScroll);

        });

    }, [])
    
    return (
      <Container>
        <div id="services" className={ServiceStyle.serviceContainer} onScroll={handelServiceScroll}>
          <div className={ServiceStyle.serviceContainerHeading}>
            <h2 style={serviceHeadingAnime}>Services <span className={ServiceStyle.serviceSpanHeading}> Overview </span>
            </h2>
          </div>

            <div className={ServiceStyle.serviceContainerSection}>
                
                <div className={ServiceStyle.subServiceContainerSection} style={secondSubServiceContainerAnime}>
                        
                    <div className={ServiceStyle.secondSubServiceContainerSection}>

                            {Service.map((item) => { return (
                            
                                <div className={ServiceStyle.serviceBox} key={item.id}>
                                    
                                    <div className={ServiceStyle.serviceBoxImage}>

                                        <img src={item.serviceicon} />
                            
                                    </div>
                                    <div className={ServiceStyle.serviceBoxHeading}>

                                        <h3>{item.servicename}</h3>
                            
                                    </div>
                                    <div className={ServiceStyle.serviceBoxPara}>

                                        <p>{item.description}</p>
                            
                                    </div>

                                </div>
                            )})
                            
                        }
                            
                    </div>
                        
                    <div className={ServiceStyle.secondSubServiceContainerSection}>

                        {Service.map((item) => {
                            
                             return (
                                 
                                <div className={ServiceStyle.serviceBox} key={item.id}>
                        
                                    <div className={ServiceStyle.serviceBoxImage}>

                                        <img src={item.serviceicon} />   
                            
                                    </div>
                                    <div className={ServiceStyle.serviceBoxHeading}>

                                        <h3> {item.servicename} </h3>
                            
                                    </div>
                                    <div className={ServiceStyle.serviceBoxPara}>

                                         <p>{item.description}</p>
                            
                                    </div>

                                </div>
                                                 
                            )
                                
                        })}
                            
                    </div>
                        
                </div>
                    
            </div>
                
        </div>
            
      </Container>
    );

}

export default Services;