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
import { InputFesto } from '../../components/InputFesto/InputFesto';

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

  const [itog, setItog] = useState('initial');

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }


  const onSubmit = (_, e) => {
    e.preventDefault();

    if (isValid) {
      requestToServer(
        '/user/create-users-potential',
        data,
      )
      .then(() => setItog('success'))
      .catch(() => setItog('failure'));

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

            {itog === 'success' &&
              <Alert
                variant='filled'
                severity="success"
                id='success_form'
              >
                  Your data was sent successfully!
              </Alert>
            }
            {itog === 'failure' &&
              <Alert
                variant='filled'
                severity="error"
                id='success_form'
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
                  <InputFesto
                    inputName={'first_name'}
                    required={'This input is required.'}
                    minLength={3}
                    maxLength={20}
                    patternValue={/^[A-Za-z]+$/}
                    patternMessage={'first name'}
                    placeholder={'John'}
                    className={'contactUs__register--form-row__item--input'}
                    type={'text'}
                    style={null}
                    onChange={handle}
                    inputData={data}
                  />
                </span>

                <span className='contactUs__register--form-row__item'>
                  <label htmlFor="last_name" className='contactUs__register--form-row__item--label'>
                    Last Name
                  </label>
                  <InputFesto
                    inputName={'last_name'}
                    required={'This input is required.'}
                    minLength={3}
                    maxLength={20}
                    patternValue={/^[A-Za-z]+$/}
                    patternMessage={'last name'}
                    placeholder={'Smith'}
                    className={'contactUs__register--form-row__item--input'}
                    type={'text'}
                    style={null}
                    onChange={handle}
                    inputData={data}
                  />
                </span>
              </div>

              <div className='contactUs__register--form-row'>
                <span className='contactUs__register--form-row__item'>
                  <label htmlFor="email" className='contactUs__register--form-row__item--label'>
                    Email
                  </label>
                  <InputFesto
                    inputName={'email'}
                    required={'This input is required.'}
                    minLength={null}
                    maxLength={null}
                    patternValue={/^.+@.+\.[a-zA-Z]{2,63}$/}
                    patternMessage={'email address'}
                    placeholder={'name@example.com'}
                    className={'contactUs__register--form-row__item--input'}
                    type={'email'}
                    style={null}
                    onChange={handle}
                    inputData={data}
                  />
                </span>

                <span className='contactUs__register--form-row__item'>
                  <label htmlFor="phone" className='contactUs__register--form-row__item--label'>
                    Phone
                  </label>
                  <InputFesto
                    inputName={'phone'}
                    required={'This input is required.'}
                    minLength={12}
                    maxLength={20}
                    patternValue={/^\+\d+$/}
                    patternMessage={'phone number'}
                    placeholder={'+447428072804'}
                    className={'contactUs__register--form-row__item--input'}
                    type={'phone'}
                    style={null}
                    onChange={handle}
                    inputData={data}
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
                  <InputFesto
                    inputName={'company'}
                    required={false}
                    minLength={null}
                    maxLength={null}
                    patternValue={null}
                    patternMessage={null}
                    placeholder={'company name'}
                    className={'contactUs__register--form-row__item--input'}
                    type={'text'}
                    style={{width:'100%'}}
                    onChange={handle}
                    inputData={data}
                  />
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
