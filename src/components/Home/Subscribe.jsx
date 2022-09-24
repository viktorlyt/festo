import React from 'react'

export const Subscribe = () => {
  return (
    <div className='home__subscribe'>
      <span className='home__subscribe-span'>Subscribe to our newsletters</span>
      <form 
        action="" 
        method='post'
        className='home__subscribe-form'
      >
        <label htmlFor="subscribe" className='home__subscribe-form--label'>
          Enter your email address
        </label>
        <div className='home__subscribe-form--div'>
          <input
            className='home__subscribe-form--input'
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
              className='home__subscribe-form--button'
            >
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
