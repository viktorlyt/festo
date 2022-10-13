import React from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message";
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Subscribe } from '../../components/Subscribe/Subscribe'
import logoBig from '../../images/logo-big.png'

export const ContactUs = () => {
  const { register, handleSubmit, formState: {errors} } = useForm({
    criteriaMode: "all"
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='contactUs'>
      <Header />
      <div className='contactUs__banner'></div>

      <div className='contactUs__text'>
        <h1 className='contactUs__text--h'>Register your <br/> interest.</h1>
      </div>

      <div className='contactUs__gray'></div>
      <div className='contactUs__white'></div>

      <section className='contactUs__register'>
        <div className='contactUs__register--red'>
          <img 
            src={logoBig}
            alt="logo-big" 
            className='contactUs__register--red-logo'
          />
        </div>
        <div className='contactUs__register--infobox'>
          <div className='contactUs__register--info'>
            <h3 className='contactUs__register--info-h2'>Register your interest.</h3>

            <form
              onSubmit={handleSubmit(onSubmit)}
              action="" 
              method='post'
              className='contactUs__register--form'
            >
              <div className='contactUs__register--form-row'>
                <span className='contactUs__register--form-row__item'>
                  <label htmlFor="firstName" className='contactUs__register--form-row__item--label'>
                    First Name
                  </label>
                  <input
                    {...register('firstName', {
                      required: 'This input is required.',
                      minLength: {
                        value: 3,
                        message: 'Min 3 characters.',
                      },
                      maxLength: {
                        value: 20,
                        message: 'Max 20 characters.',
                      },
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message: "Please enter a valid first name.",
                      },
                    })}
                    className='contactUs__register--form-row__item--input'
                    type='text'
                    id='firstName'
                  />
                  <ErrorMessage
                    errors={errors}
                    name="firstName"
                    render={({ messages }) => {
                      console.log("messages", messages);
                      return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <p key={type} style={{ color: 'red' }}>{message}</p>
                          ))
                        : null;
                    }}
                  />
                </span>

                <span className='contactUs__register--form-row__item'>
                  <label htmlFor="lastName" className='contactUs__register--form-row__item--label'>
                    Last Name
                  </label>
                  <input
                    {...register("lastName", {
                      required: 'This input is required.',
                      minLength: {
                        value: 3,
                        message: 'Min 3 characters.',
                      },
                      maxLength: {
                        value: 20,
                        message: 'Max 20 characters.',
                      },
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message: "Please enter a valid last name.",
                      },
                    })}
                    className='contactUs__register--form-row__item--input'
                    type='text'
                    id='lastName'
                  />
                  <ErrorMessage
                    errors={errors}
                    name="lastName"
                    render={({ messages }) => {
                      console.log("messages", messages);
                      return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <p key={type} style={{ color: 'red' }}>{message}</p>
                          ))
                        : null;
                    }}
                  />
                </span>
              </div>
              
              <div className='contactUs__register--form-row'>
                <span className='contactUs__register--form-row__item'>
                  <label htmlFor="email" className='contactUs__register--form-row__item--label'>
                    Email
                  </label>
                  <input
                    {...register("email", {
                      required: 'This input is required.',
                      pattern: {
                        value: /^.+@.+\.[a-zA-Z]{2,63}$/, 
                        message: "Please enter a valid email address.", 
                      },
                    })}
                    placeholder='e.g., name@example.com'
                    className='contactUs__register--form-row__item--input'
                    type='email'
                    id='email'
                  />
                  <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ messages }) => {
                      console.log("messages", messages);
                      return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <p key={type} style={{ color: 'red' }}>{message}</p>
                          ))
                        : null;
                    }}
                  />
                </span>

                <span className='contactUs__register--form-row__item'>
                  <label htmlFor="phone" className='contactUs__register--form-row__item--label'>
                    Phone
                  </label>
                  <input
                    {...register("phone", {
                      required: 'This input is required.',
                      minLength: {
                        value: 10,
                        message: 'Min 10 characters.',
                      },
                      maxLength: {
                        value: 20,
                        message: 'Max 20 characters.',
                      },
                      pattern: {
                        value: /^\+\d+$/, 
                        message: "Please enter a valid phone number", 
                      },
                    })}
                    placeholder = "+447428072804"
                    className='contactUs__register--form-row__item--input'
                    type='phone'
                    id='phone'
                  />
                  <ErrorMessage
                    errors={errors}
                    name="phone"
                    render={({ messages }) => {
                      console.log("messages", messages);
                      return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <p key={type} style={{ color: 'red' }}>{message}</p>
                          ))
                        : null;
                    }}
                  />
                </span>
              </div>
              
              <div className='contactUs__register--form-row'>
                <span className='contactUs__register--form-row__item'>
                  <label htmlFor="message" className='contactUs__register--form-row__item--label'>
                    Leave us a message...
                  </label>
                  <textarea
                    {...register("multipleErrorInputMessage", {
                      required: 'This input is required.',
                      minLength: {
                        value: 20,
                        message: 'Min 20 characters.',
                      },
                      maxLength: {
                        value: 1000,
                        message: 'Max 1000 characters.',
                      },
                    })}
                    placeholder = "...so I'd like to order twenty tickets for my family and friends..."
                    className='contactUs__register--form-row__item--textarea'
                    type='text'
                    id='massage'
                  >
                  </textarea>
                  <ErrorMessage
                    errors={errors}
                    name="multipleErrorInputMessage"
                    render={({ messages }) => {
                      console.log("messages", messages);
                      return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <p key={type} style={{ color: 'red' }}>{message}</p>
                          ))
                        : null;
                    }}
                  />
                </span>
              </div>

              <div className='contactUs__register--form-row'>
                <span className='contactUs__register--form-row__item'>
                  <label htmlFor="company" className='contactUs__register--form-row__item--label-NR'>
                    Company
                  </label>
                  <input
                    className='contactUs__register--form-row__item--input'
                    type='text'
                    id='company'
                    placeholder='company name'
                  >
                  </input>
                </span>
              </div>

              <button type='submit' className='contactUs__register--form-btn'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className='contactUs__white'></div>
      <div className='contactUs__red'></div>

      <Subscribe />
      <Footer />
    </div>
  )
}
