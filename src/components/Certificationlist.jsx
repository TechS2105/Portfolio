import React from 'react';
import CertificateImages from './Certificateimage';
import CertificationListStyle from '../../public/styles/Certificationlist.module.css'

function Certificationlist() {
    
    return (

        <>

            <div className={CertificationListStyle.certificationListContainer}>

                <div className={CertificationListStyle.subCertificateList}>

                    <CertificateImages
        
                        image="/images/certificate/UC-971c7ea7-3643-4b7f-b009-a4584b4097a9.jpg"
                        imagelink="/files/UC-971c7ea7-3643-4b7f-b009-a4584b4097a9.pdf"
            
                    />

                    <CertificateImages 
        
                        image="/images/udemy 2.png"
                        imagelink="/images/udemy 2.png"
            
                    />
                    
                </div>

                <div className={CertificationListStyle.subCertificateList}>

                    <CertificateImages

                        image="/images/certificate/UC-971c7ea7-3643-4b7f-b009-a4584b4097a9.jpg"
                        imagelink="/files/UC-971c7ea7-3643-4b7f-b009-a4584b4097a9.pdf"

                    />

                    <CertificateImages 

                        image="/images/udemy 2.png"
                        imagelink="/images/udemy 2.png"

                    />

                </div>
                    
                
            </div>
            
        </>

    );

}

export default Certificationlist;