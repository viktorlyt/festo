import React from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message"
import { useState } from 'react';
import { requestToServer } from '../../helpers/requestToServer';
import { Alert } from '@mui/material';

export const Subscribe = () => {
  const { register, handleSubmit, formState: {errors} } = useForm({ criteriaMode: "all" });
  const [data, setData] = useState({ email: "" });

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    
    if (errors) {
      alert('Check out the form for mistakes!');
    } else {
      requestToServer(
        '/user/create-subscribe',
        data,
      )
    }
  };

  return (
    <div className='subscribe'>
      <span className='subscribe-span'>Subscribe to our newsletters</span>
      <form 
        id='formSub'
        onSubmit={(e) => handleSubmit(onSubmit(e))(e)}
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
              name: "email",
              pattern: {
                value: /^.+@.+\.[a-zA-Z]{2,63}$/, 
                message: "Please enter a valid email address.", 
              },
            })}
            onChange={(e) => handle(e)}
            value={data.email}
            placeholder='e.g., name@example.com'
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
