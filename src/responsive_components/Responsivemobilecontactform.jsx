import React from 'react';
import ResponsiveContactFormStyle from '../../public/styles/Responsive Style/Responsivecontactform.module.css';
import { useForm } from 'react-hook-form';

function ResponsiveMobileContactFrom({handelOnScrollMobileForm, state, secondState}) {

    const {

        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
        
    } = useForm();

    const onSubmit = async (data) => {
        
        let r = await fetch('http://localhost:3000/api/mobile/send-email', {
           
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: "POST",
            body: JSON.stringify(data)

        });

        let res = await r.json();
        console.log(data, res);
        reset();
    };
    
    return (
      <div className={ResponsiveContactFormStyle.responsiveFormStyle} onScroll={handelOnScrollMobileForm}>
        <form onSubmit={handleSubmit(onSubmit)} style={state}>
          <label htmlFor="firstname" style={secondState}> First Name </label><br />
                <input type="text" placeholder="Enter your first name" {...register("firstname", {required: {value: true, message: "Firstname field is required"}})} />
                
                {errors.firstname && <div className={ResponsiveContactFormStyle.responsiveErrorsStyle}> {errors.firstname.message} </div>}<br />

          <label htmlFor="lastname" style={secondState}> Last Name </label><br />
                <input type="text" placeholder="Enter your last name" {...register("lastname", {required: {value: true, message: "Lastname field is required"}})} />

                {errors.lastname && <div className={ResponsiveContactFormStyle.responsiveErrorsStyle}> {errors.lastname.message}</div>}<br />

          <label htmlFor="email" style={secondState}> Email </label><br />
                <input type="email" placeholder="Enter you email" {...register("email", { required: { value: true, message: "Email field is required" } })} />
                
                {errors.email && <div className={ResponsiveContactFormStyle.responsiveErrorsStyle}> {errors.email.message} </div>}<br />

          <label htmlFor="textarea" style={secondState}> Message </label><br />
          <textarea
            placeholder="Type you message..."
            {...register("textarea", {required: {value: true, message: "Message field is required"}})}        
          ></textarea>
          
                {errors.textarea && <div className={ResponsiveContactFormStyle.responsiveErrorsStyle}> {errors.textarea.message} </div>}

            {isSubmitting && <div className={ResponsiveContactFormStyle.responsiveErrorsStyle}> The form is Submitting... </div>}<br />
                
          <button type="submit"> Submit </button>
        </form>

        <div className={ResponsiveContactFormStyle.responsiveMapStyle}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.8642621770914!2d88.09847677482875!3d23.175153710617973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f859e342cffbbf%3A0x666d5c145a7afa10!2sMemari%20V.M.%20Institution%20Unit-1!5e0!3m2!1sen!2sin!4v1750357119178!5m2!1sen!2sin"
            style={{ border: "0", borderRadius: "5vmin", boxShadow: "2px 2px 10px #292929", width: "95vmin", height: "50vmin"}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    );

}

export default ResponsiveMobileContactFrom;