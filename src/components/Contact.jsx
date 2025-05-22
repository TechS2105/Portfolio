import React from 'react';
import Container from './Container';
import ContactStyle from '../../public/styles/Contact.module.css';

function Contact() {

    return (

        <Container>

            <div id="contact" className={ContactStyle.contactContainer}>
                
                <div className={ContactStyle.contactHeading}>

                    <h2> Get In <span className={ContactStyle.spanContactHeading}> Touch</span></h2>

                </div>

                <div className={ContactStyle.contactInformationContainer}>

                    <div className={ContactStyle.contactDetails}>

                        <div className={ContactStyle.contactsInfo}>Memari, Burdwan</div>
                        <div className={ContactStyle.contactsInfo}>+91 954XX XX494</div>
                        <div className={ContactStyle.contactsInfo}>sovandey2105@gmail.com</div>       

                    </div>
                    <div className={ContactStyle.contactMap}>
                            
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5822.598948974234!2d88.0987992967656!3d23.169925794237308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f859e1236f5c91%3A0x87bd2167faca5f0f!2z4Kau4KeH4Kau4Ka-4Kaw4Ka_LCDgppPgpq_gprzgp4fgprjgp43gpp8g4Kas4KeH4KaZ4KeN4KaX4Kay!5e0!3m2!1sbn!2sin!4v1747860416300!5m2!1sbn!2sin" style={{ border: 0, width: "100%", height: "100%"}} loading="lazy"/>

                    </div>
                    <div className={ContactStyle.contactForm}>

                        <form action="#">

                            <label htmlFor='firstname'> First Name </label><br/><br/>
                            <input type="text" id="firstname" placeholder='Enter Your First Name' required /><br/><br/>
                            
                            <label htmlFor="lastname"> Last Name </label><br /><br />
                            <input type="text" id="lastname" placeholder='Enter Your Last Name' required /><br/><br/>
                            
                            <label htmlFor="email"> Email </label><br /><br />
                            <input type="email" id="email" placeholder='Enter Your Email' required /><br /><br/>
                            
                            <label htmlFor="textarea"> Message </label><br/><br/>
                            <textarea id="textarea" cols={53} rows={8} required placeholder='Type Your Message...'></textarea><br/><br/>

                            <button type='submit'> Submit </button>

                        </form>

                    </div>

                </div>

            </div>
            
        </Container>

    );

}

export default Contact;