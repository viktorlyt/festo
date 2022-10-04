import React from 'react'

export const Subscribe = () => {
  return (
    <div className='subscribe'>
      <span className='subscribe-span'>Subscribe to our newsletters</span>
      <form 
        action="" 
        method='post'
        className='subscribe-form'
      >
        <label htmlFor="subscribe" className='subscribe-form--label'>
          Enter your email address
        </label>
        <div className='subscribe-form--div'>
          <input
            className='subscribe-form--input'
            type='email'
            id='subscribe'
            placeholder='e.g., name@example.com'
            required
            pattern="^.+@.+\.[a-zA-Z]{2,63}$"
            maxLength='250'
            title='Please fill in this field'
          >
          </input>
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
      </form>
    </div>
  )
}
