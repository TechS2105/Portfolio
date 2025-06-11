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
        
                        image="/images/certificate/UC-0c00eed7-698c-41fb-a66e-8374063b1196.jpg"
                        imagelink="/files/UC-0c00eed7-698c-41fb-a66e-8374063b1196.pdf"
            
                    />
                    
                </div>

                <div className={CertificationListStyle.subCertificateList}>

                    <CertificateImages

                        image="/images/certificate/UC-971c7ea7-3643-4b7f-b009-a4584b4097a9.jpg"
                        imagelink="/files/UC-971c7ea7-3643-4b7f-b009-a4584b4097a9.pdf"

                    />

                    <CertificateImages 

                        image="/images/certificate/UC-0c00eed7-698c-41fb-a66e-8374063b1196.jpg"
                        imagelink="/files/UC-0c00eed7-698c-41fb-a66e-8374063b1196.pdf"

                    />

                </div>

                <div className={CertificationListStyle.subCertificateList}>

                    <CertificateImages

                        image="/images/certificate/UC-971c7ea7-3643-4b7f-b009-a4584b4097a9.jpg"
                        imagelink="/files/UC-971c7ea7-3643-4b7f-b009-a4584b4097a9.pdf"

                    />

                    <CertificateImages 

                        image="/images/certificate/UC-0c00eed7-698c-41fb-a66e-8374063b1196.jpg"
                        imagelink="/files/UC-0c00eed7-698c-41fb-a66e-8374063b1196.pdf"

                    />

                </div>
                    
                
            </div>
            
        </>

    );

}

export default Certificationlist;