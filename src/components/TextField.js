import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2" style={{ paddingBottom: "1.5em" }}>
      <label className="mb-2" style={{ paddingBottom: "0.5em", color:"#8a909e" }} htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      />
      <ErrorMessage style={{ color:"red" }} component="div" name={field.name} className="error" />
    </div>
  )
}