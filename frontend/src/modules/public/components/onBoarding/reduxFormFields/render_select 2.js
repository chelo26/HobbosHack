import React from 'react'

export const RenderSelect = ({ input, label, type, className, optionsState, meta: { asyncValidating, touched, error, onFocus, valid }, children }) => (
    <div>
      <div>
        <select value={optionsState} {...input} placeholder={label} className={className + (touched && error ? ' is-invalid' : '') + (touched && valid ? ' is-valid' : '')} >
          {children}
        </select>
        {touched && error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  )

  export default RenderSelect