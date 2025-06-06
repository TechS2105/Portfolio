import React, {useState, useEffect} from 'react';
import Container from './Container';
import ContactStyle from '../../public/styles/Contact.module.css';

function Contact() {

    const [contactHeadingAnime, setContactHeadingAnime] = useState({

        transform: "translateY(-500px)",
        filter: "blur(20px)",

    });

    const [contactInfoAnime, setContactInfoAnime] = useState({

        transform: "translateY(1000px)",
        filter: "blur(20px)",
        
    });

    const [contactMapAnime, setContactMapAnime] = useState({

        transform: "translateY(1000px)",
        filter: "blur(20px)",

    });

    const [contactFormAnime, setContactFormAnime] = useState({

        transform: "translateY(1000px)",
        filter: "blur(20px)",

    })

    function handelContactScroll() {
        
        if (window.innerWidth > 600) {
            
            if (window.scrollY > 5500) {
                
                setContactHeadingAnime({

                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                    transition: "all 0.8s ease",

                });

                setContactInfoAnime({

                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                    transition: "all 0.8s ease 0.5s",

                });

                setContactMapAnime({

                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                    transition: 'all 0.8s ease 0.7s',

                });

                setContactFormAnime({

                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                    transition: "all 0.8s ease 0.9s",

                });

            } else {
                
                setContactHeadingAnime({

                    transform: "translateY(-500px)",
                    filter: "blur(20px)",
                    transition: "all 0.8s ease",

                });

                setContactInfoAnime({

                    transform: "translateY(1000px)",
                    filter: "blur(20px)",
                    transition: "all 0.8s ease",

                });

                setContactMapAnime({

                    transform: "translateY(1000px)",
                    filter: 'blur(20px)',
                    transition: "all 0.8s ease",

                });

                setContactFormAnime({

                    transform: "translateY(1000px)",
                    filter: "blur(20px)",
                    transition: "all 0.8s ease",

                });


            }

        }

    }

    useEffect(() => {

        setTimeout(() => {

            window.addEventListener("scroll", handelContactScroll);

        })

    }, []);

    return (

        <Container>

            <div id="contact" className={ContactStyle.contactContainer} onScroll={handelContactScroll}>
                
                <div className={ContactStyle.contactHeading}>

                    <h2 style={contactHeadingAnime}> Get In <span className={ContactStyle.spanContactHeading}> Touch</span></h2>

                </div>

                <div className={ContactStyle.contactInformationContainer}>

                    <div className={ContactStyle.contactDetails} style={contactInfoAnime}>

                        <div className={ContactStyle.contactsInfo}>Memari, Burdwan</div>
                        <div className={ContactStyle.contactsInfo}>+91 954XX XX494</div>
                        <div className={ContactStyle.contactsInfo}>sovandey2105@gmail.com</div>       

                    </div>
                    <div className={ContactStyle.contactMap} style={contactMapAnime}>
                            
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29342.240055881757!2d88.08314294547017!3d23.178228012110967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f859e1236f5c91%3A0x87bd2167faca5f0f!2z4Kau4KeH4Kau4Ka-4Kaw4Ka_LCDgppPgpq_gprzgp4fgprjgp43gpp8g4Kas4KeH4KaZ4KeN4KaX4Kay!5e0!3m2!1sbn!2sin!4v1748079013678!5m2!1sbn!2sin" style={{width: "100%", height: "100%", border: "0"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                    <div className={ContactStyle.contactForm} style={contactFormAnime}>  

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