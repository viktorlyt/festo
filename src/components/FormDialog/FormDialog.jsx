import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import {useForm} from "react-hook-form";
import { useParams } from 'react-router-dom'
import {useState} from "react";
import {requestToServer} from "../../helpers/requestToServer";
import {Alert} from "@mui/material";
import { InputFesto } from '../InputFesto/InputFesto';

export const FormDialog = ({className = ''}) => {
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const [itog, setItog] = useState('initial');
  const [errorText, setErrorText] = useState('Server Error!');

  const {
    handleSubmit,
    formState: { isValid },
  } = useForm({
    criteriaMode: "all",
    mode: "onChange"
  });

  const [data, setData] = useState({
    first_name: "",
    phone: "",
    last_name: "",
    birthday: "",
  });

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  const onSubmit = (_, e) => {
    e.preventDefault();

    if (isValid) {
      requestToServer(
        '/payment/create-payment-from-site',
        {
          'PaySiteForm[party_id]': id,
          'PaySiteForm[first_name]': data.first_name,
          'PaySiteForm[phone]': data?.phone?.replace('+44', ''),
          'PaySiteForm[last_name]': data.last_name,
          'PaySiteForm[birth_date]': Math.round(Date.parse(data.birthday)/1000),
        },
      )
        .then((res) => {
          setItog('success');

          if(res?.message?.error){
            setErrorText(res?.message?.error ?? "Server Error!")
            setItog('failure');
          }

          if(res?.message?.includes('https://checkout.stripe.com/'))
            setTimeout(() => window.location.href = res?.message, 100)
        })
        .catch( );

      setData({
        first_name: "",
        phone: "",
        last_name: "",
        birthday: "",
      });
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={className}>
      <Button
        onClick={handleClickOpen}
        sx={{
          padding: 0,
          width: '100%',
        }}
      >
        <div className='party__left--btn'>
          Pay Now
        </div>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent  className='dialog'>
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
              {errorText}
            </Alert>
          }

          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            method='POST'
            className='contactUs__register--form'
          >
            <div className='contactUs__register--form-row' style={{display: 'block'}}>
                <span className='contactUs__register--form-row__item' style={{marginBottom: 25}}>
                  <label htmlFor="first_name" className='contactUs__register--form-row__item--label'>
                    First Name <b style={{color: 'red'}}>*</b>
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
                    style={{width:'100%'}}
                    onChange={handle}
                    inputData={data}
                  />
                </span>

              <span className='contactUs__register--form-row__item' style={{marginBottom: 25}}>
                  <label htmlFor="phone" className='contactUs__register--form-row__item--label'>
                    Phone <b style={{color: 'red'}}>*</b>
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
                    style={{width:'100%'}}
                    onChange={handle}
                    inputData={data}
                  />
                </span>

              <span className='contactUs__register--form-row__item' style={{marginBottom: 25}}>
                  <label htmlFor="last_name" className='contactUs__register--form-row__item--label'>
                    Last Name
                  </label>
                  <InputFesto
                    inputName={'last_name'}
                    required={false}
                    minLength={3}
                    maxLength={20}
                    patternValue={/^[A-Za-z]+$/}
                    patternMessage={'last name'}
                    placeholder={'Smith'}
                    className={'contactUs__register--form-row__item--input'}
                    type={'text'}
                    style={{width:'100%'}}
                    onChange={handle}
                    inputData={data}
                  />
                </span>

              <span className='contactUs__register--form-row__item'>
                 <label htmlFor="birthday" className='contactUs__register--form-row__item--label'>
                   Date of Birth
                 </label>
                 <InputFesto
                    inputName={'birthday'}
                    required={false}
                    minLength={null}
                    maxLength={null}
                    patternValue={null}
                    patternMessage={null}
                    placeholder={null}
                    className={'contactUs__register--form-row__item--input'}
                    type={'date'}
                    style={{width:'100%'}}
                    onChange={handle}
                    inputData={data}
                  />
               </span>
            </div>
          </form>
        </DialogContent>

        <DialogActions>
          <Button 
            onClick={handleClose}
          >
            Cancel
          </Button>
          
          <Button
            onClick={handleSubmit(onSubmit)}
            type='submit'
            style={{backgroundColor: '#ff3818', color: '#fff'}}
          >
            Go to Checkout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
