import React from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message"

export const Subscribe = () => {
  const { register, handleSubmit, formState: {errors} } = useForm({
    criteriaMode: "all"
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='subscribe'>
      <span className='subscribe-span'>Subscribe to our newsletters</span>
      <form 
        onSubmit={handleSubmit(onSubmit)}
        action="" 
        method='post'
        className='subscribe-form'
      >
        <label htmlFor="subscribe" className='subscribe-form--label'>
          Enter your email address
        </label>
        <div className='subscribe-form--div'>
          <input
             {...register("subscribe", {
              required: true,
              pattern: {
                value: /^.+@.+\.[a-zA-Z]{2,63}$/, 
                message: "Please enter a valid email address.", 
              },
            })}
            placeholder='e.g., name@example.com'
            className='subscribe-form--input'
            type='email'
            id='subscribe'
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
          name="subscribe"
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
