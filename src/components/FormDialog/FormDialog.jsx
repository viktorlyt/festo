import * as React from 'react';
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import {useForm} from "react-hook-form";
import { useParams } from 'react-router-dom'
import {useState} from "react";
import {requestToServer} from "../../helpers/requestToServer";
import {Alert} from "@mui/material";
import {ErrorMessage} from "@hookform/error-message";

export const FormDialog = ({className = ''}) => {
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const [itog, setItog] = useState('initial');
  const [errorText, setErrorText] = useState('Server Error!');

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
    phone: "",
    last_name: "",
    birthday: "",
  });

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  const onSubmit = (data, e) => {
    e.preventDefault();

    if (isValid) {
      setData(data);
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
        <DialogContent>
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
                <span className='contactUs__register--form-row__item'>
                  <label htmlFor="first_name" className='contactUs__register--form-row__item--label'>
                    First Name <b style={{color: 'red'}}>*</b>
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
                        message: "Please enter a valid first name.",
                      },
                      onChange: (e) => handle(e),
                    })}
                    value={data.first_name}
                    placeholder='John'
                    className='contactUs__register--form-row__item--input'
                    type='text'
                    id='first_name'
                    style={{width:'100%', marginBottom: 25}}
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
                  <label htmlFor="phone" className='contactUs__register--form-row__item--label'>
                    Phone <b style={{color: 'red'}}>*</b>
                  </label>
                  <input
                    {...register("phone", {
                      required: 'This input is required.',
                      minLength: {
                        value: 12,
                        message: 'Min 12 characters.',
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
                    style={{width:'100%', marginBottom: 25}}
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

              <span className='contactUs__register--form-row__item'>
                  <label htmlFor="last_name" className='contactUs__register--form-row__item--label'>
                    Last Name
                  </label>
                  <input
                    {...register("last_name", {
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
                    style={{width:'100%', marginBottom: 25}}
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

              <span className='contactUs__register--form-row__item'>
                 <label htmlFor="birthday" className='contactUs__register--form-row__item--label'>
                   Date of Birth
                 </label>
                 <input
                  {...register("birthday", {
                    onChange: (e) => handle(e),
                  })}
                    value={data.birthday}
                    className='contactUs__register--form-row__item--input'
                    type='date'
                    id='birthday'
                    style={{width:'100%', marginBottom: 25}}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="birthday"
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
          </form>

        </DialogContent>
        <DialogActions>
          <Button 
            onClick={handleClose}
            // style={{backgroundColor: 'grey'}}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit(onSubmit)}
            type='submit'
            style={{backgroundColor: '#ff3818', color: '#fff'}}
            // className={'party__left--btn'}
          >
            Go to Checkout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
