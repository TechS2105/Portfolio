import React from 'react';
import Container from '../components/Container';
import ServiceStyle from '../../public/styles/Services.module.css';
import Service from '../objects/Services';

function Services() {
    
    return (
      <Container>
        <div id="services" className={ServiceStyle.serviceContainer}>
          <div className={ServiceStyle.serviceContainerHeading}>
            <h2>Services <span className={ServiceStyle.serviceSpanHeading}>I Provide</span>
            </h2>
          </div>

            <div className={ServiceStyle.serviceContainerSection}>
                
                <div className={ServiceStyle.subServiceContainerSection}>
                        
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