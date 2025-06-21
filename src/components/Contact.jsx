import React, {useState, useEffect} from 'react';
import Container from './Container';
import ContactStyle from '../../public/styles/Contact.module.css';
import { useForm } from 'react-hook-form';
import ResponsiveMobileContactForm from '../responsive_components/Responsivemobilecontactform';

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

        } else if (window.innerWidth < 600) {
            
            if (window.scrollY > 6400) {
                
                setContactHeadingAnime({

                    transform: "translateY(0)",
                    filter: "blur(0px)",
                    transition: 'all 0.8s ease'

                })

            } else {
                
                setContactHeadingAnime({

                    transform: "translateY(-500px)",
                    filter: "blur(20px)",
                    transition: "all 0.8s ease"

                });

            }

        }

    }

    useEffect(() => {

        setTimeout(() => {

            window.addEventListener("scroll", handelContactScroll);

        })

    }, []);

    // For Mobile View 
    const [handelMobileFormAnime, setHandelMobileFormAnime] = useState({

        transform: "scaleX(0)",

    });

    const [secondState, setSecondState] = useState({

        transform: "translateX(-500px)",
        filter: "blur(20px)"

    });

    function handelOnScrollMobileForm(){

        if (window.scrollY > 6500) {
            
            setHandelMobileFormAnime({

                transform: "scaleX(1)",
                transition: "all 0.8s ease",

            });

            setSecondState({

                transform: "translateX(0px)",
                filter: "blur(0px)",
                transition: `all 0.8s ease calc(0.8s / 2s)`

            });

        } else {
            
            setHandelMobileFormAnime({

                transform: "scaleX(0)",
                transition: "all 0.8s ease",

            });

            setSecondState({

                transform: "translateX(-500px)",
                filter: "blur(20px)",
                transition: "all 0.8s ease calc(0.8s / 2s)"

            });

        }

    }

    useEffect(() => {

        setTimeout(() => {

            document.addEventListener("scroll", handelOnScrollMobileForm)

        })

    }, [])

    // use react hook form
    const {

        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }

    } = useForm();

    const onSubmit = async (data) => {

        let r = await fetch("http://localhost:3000/api/send-mail", {
          headers: { "Content-Type": "application/json; charset=utf-8" },
          method: "POST",
          body: JSON.stringify(data),
        });
        let res = await r.json();
        console.log(data, res);
        reset();

    }

    return (

        <Container>

            <div id="contact" className={ContactStyle.contactContainer} onScroll={handelContactScroll}>
                
                <div className={ContactStyle.contactHeading}>

                    <h2 style={contactHeadingAnime}> Contact <span className={ContactStyle.spanContactHeading}> With Me </span></h2>

                </div>

                {/** MOBILE VIEW CONTACT SECTION */}
                <div className={ContactStyle.mobileContactFormSection}>

                    <ResponsiveMobileContactForm
                    
                        onScroll={handelOnScrollMobileForm}
                        state={handelMobileFormAnime}
                        secondState={secondState}
                        
                    />

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

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <label htmlFor='firstname'> First Name </label><br/><br/>
                            <input type="text" placeholder='Enter Your First Name' {...register("firstname", { required: { value: true, message: "Firstname is required" }, maxLength: {value: 10, message: "Maxlength is 10"} })} /><br />
                            
                            {errors.firstname && <div className={ContactStyle.errorMessageStyle}>{errors.firstname.message}</div>}

                            <br />
                            
                            <label htmlFor="lastname"> Last Name </label><br /><br />
                            <input type="text" placeholder='Enter Your Last Name' {...register("lastname", { required: { value: true, message: "Lastname is required" }, maxLength: { value: 10, message: "Maxlength is 10" } })} /><br />
                            
                            {errors.lastname && <div className={ContactStyle.errorMessageStyle}>{errors.lastname.message}</div>}

                            <br />
                            
                            <label htmlFor="email"> Email </label><br /><br />
                            <input type="email" placeholder='Enter Your Email' {...register("email", { required: { value: true, message: "Email is required" }, maxlength: { value: 50, message: "Maxlength is 50" } })} /><br />
                            
                            {errors.email && <div className={ContactStyle.errorMessageStyle}>{errors.email.message}</div>}

                            <br />
                            
                            <label htmlFor="textarea"> Message </label><br/><br/>
                            <textarea id="textarea" cols={53} rows={8} placeholder='Type Your Message...' {...register("textarea", { required: { value: true, message: "Message is required" } })}></textarea><br />
                            
                            {errors.textarea && <div className={ContactStyle.errorMessageStyle}>{errors.textarea.message}</div>}

                            <br />

                            {isSubmitting && <div className={ContactStyle.submittingstyle}> Form is Submitting... </div>}

                            <button type='submit' disabled={isSubmitting}> Submit </button>
                                                                               
                        </form>

                    </div>

                </div>

            </div>
            
        </Container>

    );

}

export default Contact;