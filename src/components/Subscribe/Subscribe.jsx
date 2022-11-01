import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import { requestToServer } from '../../helpers/requestToServer';
import { Alert } from '@mui/material';
import { InputFesto } from '../InputFesto/InputFesto';

export const Subscribe = () => {
  const { 
    handleSubmit, 
    formState: { isValid } 
  } = useForm({ 
    criteriaMode: "all",
    mode: "onChange"
  });

  const [data, setData] = useState({ email: "" });

  const [itog, setItog] = useState('initial');

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  const onSubmit = (_, e) => {
    e.preventDefault();

    if (isValid) {
      requestToServer(
        '/user/create-subscribe',
        data,
      )
      .then(() => setItog('success'))
      .catch(() => setItog('failure'));

      setData({
        email: "",
      });
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
          <InputFesto
            inputName={'email'}
            required={'This input is required.'}
            minLength={null}
            maxLength={null}
            patternValue={/^.+@.+\.[a-zA-Z]{2,63}$/}
            patternMessage={'email address'}
            placeholder={'name@example.com'}
            className={'subscribe-form--input'}
            type={'email'}
            style={null}
            onChange={handle}
            inputData={data}
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

        {itog === 'success' &&
          <Alert 
            variant='filled' 
            severity="success"
            id='success_sub'
          >
              You subscribed succesfully!
          </Alert>
        }
        {itog === 'failure' && 
          <Alert 
            variant='filled' 
            severity="error"
            id='success_sub'
          >
              Server error!
          </Alert>
        }
      </form>
    </div>
  )
}
