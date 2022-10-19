import React from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message"
import { useState } from 'react';
import { requestToServer } from '../../helpers/requestToServer';
import { Alert } from '@mui/material';

export const Subscribe = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isValid } 
  } = useForm({ 
    criteriaMode: "all",
    mode: "onChange"
  });

  const [data, setData] = useState({ email: "" });

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  console.log('isValid', isValid);

  const onSubmit = (data, e) => {
    e.preventDefault();

    if (!isValid) {
      alert('Check out the form for mistakes!');
    } else {
      setData(data);
      requestToServer(
        '/user/create-subscribe',
        data,
      );
    }
  };

  return (
    <div className='subscribe'>
      <span className='subscribe-span'>Subscribe to our newsletters</span>
      <form 
        id='formSub'
        onSubmit={handleSubmit(onSubmit)}
        action=""
        method='POST'
        className='subscribe-form'
      >
        <label htmlFor="email" className='subscribe-form--label'>
          Enter your email address
        </label>
        <div className='subscribe-form--div'>
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
            className='subscribe-form--input'
            type='email'
            id='email'
          />
          <div>
            <button
              type="submit"
              className='subscribe-form--button'
            >
              Subscribe
            </button>
          </div>
          
          <div>
            <button
              type="submit"
              className='subscribe-form--button-mobile'
            >
              Subscribe
            </button>
          </div>
        </div>
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ messages }) => {
            console.log("messages", messages);
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <Alert key={type} severity="warning">{message}</Alert>
                  // <p key={type} style={{ color: 'red' }}>{message}</p>
                ))
              : null;
          }}
        />
      </form>
    </div>
  )
}
