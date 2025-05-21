import React from 'react';
import ProjectImage from '../components/Projectimages';
import ProjectCarouselStyle from '../../public/styles/Projectcarousel.module.css';

function ProjectCarousel() {

    return (
        <>

            <div className={ProjectCarouselStyle.carouselContainer}>


                <div className={ProjectCarouselStyle.subCarouselContainer}>

                    <ProjectImage
                    
                        image="../../public/images/vionesse image/vionessefinalimage.png"
                        imagelink = "https://www.vionesse.com"
                        
                    /> 

                    <ProjectImage
                    
                        image="../../public/images/digitalera-new.jpeg"
                        imagelink="https://techs2105.github.io/digitalera/"
                        
                    />

                    <ProjectImage
                    
                        image="../../public/images/Guitarist image.png"
                        imagelink="https://techs2105.github.io/guitarist/"
                        
                    />

                    <ProjectImage
                    
                        image="../../public/images/photographer.jpeg"
                        imagelink="https://techs2105.github.io/photographer/"
                        
                    />

                    <ProjectImage
                    
                        image="../../public/images/iiihmimage.png"
                        imagelink="https://www.iiihm.in/"
                        
                    />

                    <ProjectImage
                    
                        image="../../public/images/cagcollegeimage.png"
                        imagelink="https://thecagcollege.in/"
                        
                    />

                    <ProjectImage
                    
                        image="../../public/images/cagschool.png"
                        imagelink="https://www.cagschool.org/"
                        
                    />
                    
                </div>
        
                <div className={ProjectCarouselStyle.subCarouselContainer}>

                    <ProjectImage

                        image="../../public/images/vionesse image/vionessefinalimage.png"
                        imagelink = "https://www.vionesse.com"
                        
                    /> 

                    <ProjectImage

                        image="../../public/images/digitalera-new.jpeg"
                        imagelink="https://techs2105.github.io/digitalera/"
                        
                    />

                    <ProjectImage

                        image="../../public/images/Guitarist image.png"
                        imagelink="https://techs2105.github.io/guitarist/"
                        
                    />

                    <ProjectImage

                        image="../../public/images/photographer.jpeg"
                        imagelink="https://techs2105.github.io/photographer/"
                        
                    />

                    <ProjectImage
                    
                        image="../../public/images/iiihmimage.png"
                        imagelink="https://www.iiihm.in/"
                        
                    />

                    <ProjectImage
                    
                        image="../../public/images/cagcollegeimage.png"
                        imagelink="https://thecagcollege.in/"
                        
                    />

                    <ProjectImage
                    
                        image="../../public/images/cagschool.png"
                        imagelink="https://www.cagschool.org/"
                        
                    />

                </div>

            </div>

        </>

    );

}

export default ProjectCarousel;