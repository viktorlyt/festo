import React from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message";
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Subscribe } from '../../components/Subscribe/Subscribe'
import logoBig from '../../images/logo-big.png'
import { useState } from 'react';
import { requestToServer } from '../../helpers/requestToServer';
import { Alert } from '@mui/material';

export const ContactUs = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isValid },
  } = useForm({ 
    criteriaMode: "all",
    mode: "onChange"
  });

  const [data, setData] = useState({ 
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    comment: "",
    company: "",
  });

  const [itog, setItog] = useState(false);

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  console.log('isValid', isValid);
 
  const onSubmit = (data, e) => {
    e.preventDefault();

    if (isValid) {
      setData(data);
      requestToServer(
        '/user/create-users-potential1',
        data,
      )
      .then(() => setItog(true))
      .catch(() => setItog(false));

      setData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        comment: "",
        company: "",
      });
    } 
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

            {itog && 
              <Alert 
                variant='filled' 
                severity="success"
                className='success'
              >
                  Your data was sent succesfully!
              </Alert>
            }
            {!itog && 
              <Alert 
                variant='filled' 
                severity="error"
                className='success'
              >
                  Server error!
              </Alert>
            }

            <form
              onSubmit={handleSubmit(onSubmit)}
              action="" 
              method='POST'
              className='contactUs__register--form'
            >
              <div className='contactUs__register--form-row'>
                <span className='contactUs__register--form-row__item'>
                  <label htmlFor="first_name" className='contactUs__register--form-row__item--label'>
                    First Name
                  </label>
                  <input
                    {...register('first_name', {
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
                      onChange: (e) => handle(e),
                    })}
                    value={data.first_name}
                    placeholder='John'
                    className='contactUs__register--form-row__item--input'
                    type='text'
                    id='first_name'
                  />
                  <ErrorMessage
                    errors={errors}
                    name="first_name"
                    render={({ messages }) => {
                      console.log("messages", messages);
                      return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <Alert key={type} severity="error">{message}</Alert>
                            // <p key={type} style={{ color: 'red' }}>{message}</p>
                          ))
                        : null;
                    }}
                  />
                </span>

                <span className='contactUs__register--form-row__item'>
                  <label htmlFor="last_name" className='contactUs__register--form-row__item--label'>
                    Last Name
                  </label>
                  <input
                    {...register("last_name", {
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
                      onChange: (e) => handle(e),
                    })}
                    value={data.last_name}
                    placeholder='Smith'
                    className='contactUs__register--form-row__item--input'
                    type='text'
                    id='last_name'
                  />
                  <ErrorMessage
                    errors={errors}
                    name="last_name"
                    render={({ messages }) => {
                      console.log("messages", messages);
                      return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <Alert key={type} severity="error">{message}</Alert>
                            // <p key={type} style={{ color: 'red' }}>{message}</p>
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
                    onChange: (e) => handle(e),
                    })}
                    value={data.email}
                    placeholder='name@example.com'
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
                          <Alert key={type} severity="error">{message}</Alert>
                            // <p key={type} style={{ color: 'red' }}>{message}</p>
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
                      onChange: (e) => handle(e),
                    })}
                    value={data.phone}
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
                            <Alert key={type} severity="error">{message}</Alert>
                            // <p key={type} style={{ color: 'red' }}>{message}</p>
                          ))
                        : null;
                    }}
                  />
                </span>
              </div>
              
              <div className='contactUs__register--form-row'>
                <span className='contactUs__register--form-row__item'>
                  <label htmlFor="comment" className='contactUs__register--form-row__item--label'>
                    Leave us a message...
                  </label>
                  <textarea
                    {...register("comment", {
                      required: 'This input is required.',
                      minLength: {
                        value: 20,
                        message: 'Min 20 characters.',
                      },
                      maxLength: {
                        value: 1000,
                        message: 'Max 1000 characters.',
                      },
                      onChange: (e) => handle(e),
                    })}
                    value={data.comment}
                    placeholder = "...so I'd like to order twenty tickets for my family and friends..."
                    className='contactUs__register--form-row__item--textarea'
                    type='text'
                    id='comment'
                  >
                  </textarea>
                  <ErrorMessage
                    errors={errors}
                    name="comment"
                    render={({ messages }) => {
                      return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <Alert key={type} severity="error">{message}</Alert>
                          ))
                        : null;
                    }}
                  />
                </span>
              </div>

              <div className='contactUs__register--form-row'>
                <span className='contactUs__register--form-row__item'>
                  <label htmlFor="company" className='contactUs__register--form-row__item--label-NR'>
                    Company (optional)
                  </label>
                  <input
                    {...register("company", {
                      required: false,
                      onChange: (e) => handle(e),
                    })}
                    value={data.company}
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
