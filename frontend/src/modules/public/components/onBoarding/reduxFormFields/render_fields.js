import React from 'react'

const RenderFields = ({ input, label, type, className, meta: { asyncValidating, touched, error, onFocus, valid } }) => (
  <div>
    <div className= 'pb-2'>
      <input 
        {...input} 
        placeholder={label} 
        type={type} 
        className={className + (touched && error ? ' is-invalid' : '') + (touched && valid ? ' is-valid' : '')} 
      />
      {touched && error && <div className="invalid-feedback">{error}</div>}
    </div>
  </div>
)
export default RenderFields