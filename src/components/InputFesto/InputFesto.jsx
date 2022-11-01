import { ErrorMessage } from '@hookform/error-message';
import { Alert } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';

export const InputFesto = ({ 
  inputName,
  required,
  minLength,
  maxLength,
  patternValue,
  patternMessage,
  placeholder,
  className,
  type,
  style,
  onChange,
  inputData,
}) => {

  const {
    register,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    mode: "onChange"
  });

  return (
    <div>
      <input
        {...register(inputName, {
          required: required,
          minLength: {
            value: minLength,
            message: `Min ${minLength} characters.`,
          },
          maxLength: {
            value: maxLength,
            message: `Max ${maxLength} characters.`,
          },
          pattern: {
            value: patternValue,
            message: `Please enter a valid ${patternMessage}.`,
          },
          onChange: onChange,
        })}
        placeholder={placeholder}
        className={className}
        type={type}
        id={inputName}
        style={style}
        value={inputData[inputName]}
      />
      <ErrorMessage
        errors={errors}
        name={inputName}
        render={({ messages }) => {
          return messages
            ? Object.entries(messages).map(([type, message]) => (
              <Alert key={type} severity="error">{message}</Alert>
            ))
            : null;
        }}
      />
    </div>
  )
}
