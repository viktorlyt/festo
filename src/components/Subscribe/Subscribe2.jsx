import React from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message"
import { useState } from 'react';
import { requestToServer } from '../../helpers/requestToServer';

export const Subscribe2 = () => {
  const { register, handleSubmit, formState: {errors} } = useForm({ criteriaMode: "all" });
  const [data, setData] = useState({ email: "" });

  function handle(e) {
    console.log(e);
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    requestToServer(
      '/user/create-subscribe',
      data,
    )
  };

  return (
    <div className='subscribe' id="subscribeForm">
      <span className='subscribe-span'>Subscribe to our newsletters</span>
      <form 
        id='formSub'
        onSubmit={(e) => handleSubmit(onSubmit(e))}
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
              required: true,
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
                  <p key={type} style={{ color: 'red' }}>{message}</p>
                ))
              : null;
          }}
        />
      </form>
    </div>
  )
}
