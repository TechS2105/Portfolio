import React from 'react';
import CertificateImage from '../../public/styles/Certificationimages.module.css'

function Certificateimage(props) {
    
    return (

        <div className={CertificateImage.certificateImageStyle}>

            <a href={props.imagelink} download> <img src={props.image} alt={props.image} /> </a>

        </div>

    );

}

export default Certificateimage;