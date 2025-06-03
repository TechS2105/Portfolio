import React from 'react';
import ProjectImage from '../components/Projectimages';
import ProjectCarouselStyle from '../../public/styles/Projectcarousel.module.css';

function ProjectCarousel() {

    return (
        <>

            <div className={ProjectCarouselStyle.carouselContainer}>


                <div className={ProjectCarouselStyle.subCarouselContainer}>

                    <ProjectImage
                    
                        image="/images/project images/vionessefinalimage.png"
                        imagelink = "https://www.vionesse.com"
                        
                    /> 

                    <ProjectImage
                    
                        image="/images/project images/digitalera-new.jpeg"
                        imagelink="https://techs2105.github.io/digitalera/"
                        
                    />

                    <ProjectImage
                    
                        image="/images/project images/Guitarist image.png"
                        imagelink="https://techs2105.github.io/guitarist/"
                        
                    />

                    <ProjectImage
                    
                        image="/images/project images/photographer.jpeg"
                        imagelink="https://techs2105.github.io/photographer/"
                        
                    />

                    <ProjectImage
                    
                        image="/images/project images/iiihmimage.png"
                        imagelink="https://www.iiihm.in/"
                        
                    />

                    <ProjectImage
                    
                        image="/images/project images/cagcollegeimage.png"
                        imagelink="https://thecagcollege.in/"
                        
                    />

                    <ProjectImage
                    
                        image="/images/project images/cagschool.png"
                        imagelink="https://www.cagschool.org/"
                        
                    />
                    
                </div>
        
                <div className={ProjectCarouselStyle.subCarouselContainer}>

                    <ProjectImage

                        image="/images/project images/vionessefinalimage.png"
                        imagelink = "https://www.vionesse.com"
                        
                    /> 

                    <ProjectImage

                        image="/images/project images/digitalera-new.jpeg"
                        imagelink="https://techs2105.github.io/digitalera/"
                        
                    />

                    <ProjectImage

                        image="/images/project images/Guitarist image.png"
                        imagelink="https://techs2105.github.io/guitarist/"
                        
                    />

                    <ProjectImage

                        image="/images/project images/photographer.jpeg"
                        imagelink="https://techs2105.github.io/photographer/"
                        
                    />

                    <ProjectImage
                    
                        image="/images/project images/iiihmimage.png"
                        imagelink="https://www.iiihm.in/"
                        
                    />

                    <ProjectImage
                    
                        image="/images/project images/cagcollegeimage.png"
                        imagelink="https://thecagcollege.in/"
                        
                    />

                    <ProjectImage
                    
                        image="/images/project images/cagschool.png"
                        imagelink="https://www.cagschool.org/"
                        
                    />

                </div>

            </div>

        </>

    );

}

export default ProjectCarousel;