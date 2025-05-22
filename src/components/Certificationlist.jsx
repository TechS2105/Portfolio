import React from 'react';
import CertificateImages from './Certificateimage';
import CertificationListStyle from '../../public/styles/Certificationlist.module.css'

function Certificationlist() {
    
    return (

        <>

            <div className={CertificationListStyle.certificationListContainer}>

                <div className={CertificationListStyle.subCertificateList}>

                    <CertificateImages
        
                        image="../../public/images/udemy 1.png"
                        imagelink="../../public/images/udemy 1.png"
            
                    />

                    <CertificateImages 
        
                        image="../../public/images/udemy 2.png"
                        imagelink="../../public/images/udemy 2.png"
            
                    />
                    
                </div>

                <div className={CertificationListStyle.subCertificateList}>

                    <CertificateImages

                        image="../../public/images/udemy 1.png"
                        imagelink="../../public/images/udemy 1.png"

                    />

                    <CertificateImages 

                        image="../../public/images/udemy 2.png"
                        imagelink="../../public/images/udemy 2.png"

                    />

                </div>
                    
                
            </div>
            
        </>

    );

}

export default Certificationlist;