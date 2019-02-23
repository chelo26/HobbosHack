/**
 * @desc: Generic components for the inputs.
 * @event
 */

import React, { Fragment } from 'react';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Switch from '@material-ui/core/Switch';

// import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
// import DatePicker from 'material-ui/DatePicker';
// import TimePicker from 'material-ui/TimePicker';
// import DateTimePicker from 'material-ui-datetimepicker';
// import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog';
// import TimePickerDialog from 'material-ui/TimePicker/TimePickerDialog';


/**
 * @desc edyncare rounded button for the next back and submit type.
 * @param {*} param0
 */
export const RenderRoundButton = ({
  type,
  name,
  label,
  id,
  onClick,
  className,
  disabled
}) => {
  return (
    <button type={type} onClick={onClick} className={className} disabled= {disabled}>{label}</button>
  );
};

export const RenderRoundButtonWithIcons = ({
  type,
  name,
  label,
  iconType,
  id,
  onClick,
  className,
}) => {
  let icon = iconType === 'delete' ? <i className="zmdi zmdi-delete"></i> : '';
  return (
    <button type={type} onClick={onClick} className={className}>{label} {icon}</button>
  );
};

/**
 * @desc Generic component for text-field and textarea.
 * @param {*} param0 - for the textarea use multiline={true}
 */
export const renderTextField = ({
  input,
  type,
  name,
  label,
  id,
  autoFocus,
  maxLength,
  multiline,
  normalize,
  className,
  helperText,
  meta: { touched, error },
  customError,
  ...custom
}) => {
  return (
    <TextField
      type={type}
      name={name}
      label={label}
      id={id}
      multiline={multiline}
      rows={4}
      className={className}
      normalize={normalize}
      error={touched && (error || customError) ? true : false}
      helperText={touched && error ? error : helperText}
      fullWidth={true}
      autoComplete={'off'}
      autoFocus={autoFocus ? autoFocus : false}
      inputProps={{ maxLength: maxLength }}
      {...input}
      {...custom}
    />
  );
};

/**
 * @desc Checkbox generic component.
 * @param {*} param0
 */
const stylesCheckbox = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 0,
  },
};
export const renderCheckBox = ({
  input,
  defaultChecked,
  value,
  name,
  label,
  checked,
  onChange,
  className,
  disabled,
}) => {
  return (
    <FormControlLabel control={
      <Checkbox {...input}
        name={name}
        type="checkbox"
        value={value}
        className={className ? className : 'custm_check'}
        color="primary"
        checked={input.value || checked ? true : false}
        onChange={input.onChange}
        style={stylesCheckbox.checkbox}
        disabled={disabled ? disabled : false}
        defaultChecked={defaultChecked} />
    } label={label} />
  );
};

/**
 * @desc Checkbox group generoc component.
 * @param {*} param0
 */
export const renderCheckBoxes = ({
  input,
  defaultChecked,
  value,
  name,
  label,
  checked,
  onChange,
  className,
  disabled,
  options,
}) => {
  return options.map((obj, index) => {
    return (
      <FormControlLabel key={index} control={
        <Checkbox {...input}
          name={name}
          type="checkbox"
          value={obj.value}
          className={className ? className : 'custm_check'}
          color="primary"
          // checked={input.value || checked ? true : false}
          onChange={input.onChange}
          style={stylesCheckbox.checkbox}
          disabled={disabled ? disabled : false}
          defaultChecked={defaultChecked} />
      } label={obj.label} />
    );
  });
};

/**
 * @desc Radio button group generic component.
 * @param {*} param0
 */
const classes = (theme) => ({
  formControl: {
    display: 'flex',
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});
export const renderRadioButtons = ({
  input,
  name,
  label,
  options,
  className,
  selected,
  onChange,
  helperText,
  meta: { touched, error },
  children,
  ...custom
}) => {
  const stylesRadio = {
    radioButton: {
      color: '#d1d3d1',
    },
  };
  const renderRadioOptions = (options) => {
    if (options) {
      return options.map(function(obj, index) {
        return <FormControlLabel
          key={index}
          value={obj.value}
          control={<Radio color="primary" />}
          label={obj.label} />;
      });
    }
  };
  return (
    <FormControl component="fieldset" error={touched && error ? true : false} className={classes.formControl}>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        {...input}
        aria-label={label}
        name={name}
        className={classes.group}
        style={{ display: 'flex' }}
        // value={selected}
        // onChange={onChange}
      >
        {renderRadioOptions(options)}
      </RadioGroup>
      <FormHelperText>{touched && error ? error : helperText}</FormHelperText>
    </FormControl>
  );
};

/**
 * @desc Radio button with rounded box for the single selection.
 * @param {*} param0
 */
export const renderRadioWithRoundedBox = ({
  input,
  name,
  options,
  selected,
  meta: { touched, error },
}) => {
  return options.map((obj, i) => {
    let checked = selected === obj.value ? true : '';
    return (
      <div key={i} className= "col-12 col-md-auto no-gutter">
        <div className= "m-2">
          <label className="radio-container w-100 no-gutter btn btn-outline-secondary btn-sm">
            <input {...input} type="radio" name="YearsOfExp" value={obj.value} defaultChecked={checked} />
            <span className="checkmark">{obj.label}</span>
          </label>
        </div>
      </div>
    );
  });
};

/**
 * @desc Radio button with rounded box for the single selection.
 * @param {*} param0
 */
export const renderCheckboxWithRoundedBox = ({
  input,
  name,
  options,
  selected,
  meta: { touched, error },
}) => {
  return options.map((obj, i) => {
    let checked = selected === obj.value ? true : '';
    return (
      <div key={i} className= "col-12 col-md-auto no-gutter">
        <div className= "m-2">
          <label className="radio-container w-100 no-gutter btn btn-outline-secondary btn-sm">
            <input {...input} type="checkbox" name="YearsOfExp" value={obj.value} defaultChecked={checked} />
            <span className="checkmark">{obj.label}</span>
          </label>
        </div>
      </div>
    );
  });
};

// /**
//  * @desc - Datepicker.
//  * @param {*} param0
//  */
// export const renderDatePicker = ({
//   input,
//   minDate,
//   openToYearSelection,
//   maxDate,
//   showYearFlag,
//   locale,
//   label,
//   onDateChange,
//   selected,
//   className,
//   placeholder,
//   minDateVal,
//   maxDateVal,
//   showMonthFlag,
//   disabled,
//   meta: { touched, error, warning } }) => {
//   return (
//     <DatePicker
//       // floatingLabelText={placeholder}
//       container="inline"
//       // locale="en-US"
//       fullWidth={true}
//       className={className}
//       minDate={minDate ? minDate : new Date(1900, 1, 1)}
//       maxDate={maxDate ? maxDate : new Date(2120, 9, 11)}
//       errorText={touched && error}
//       {...input}
//       value={selected ? new Date(selected) : {}}
//       // autoOk={true}
//       floatingLabelStyle={{ color: '#32535A' }}
//       floatingLabelFocusStyle={{ color: '#32535A' }}
//       // style={{ background: '#32535A' }}
//       openToYearSelection={false}
//       onChange={(event, value) => onDateChange(input, value)} />
//   );
// };

// /**
//  * @desc Time Picker
//  * @param {*} param0
//  */
// export const renderTimePicker = ({
//   input,
//   name,
//   hintText,
//   onDateChange,
//   format,
//   selected,
//   fullWidth,
//   disabled,
//   placeholder,
//   meta: { touched, error, warning } }) => {
//   return (
//     <TimePicker
//       format={format ? format : 'ampm'}
//       floatingLabelText={placeholder}
//       hintText={hintText}
//       errorText={touched && error}
//       {...input}
//       value={selected !== null ? new Date(selected) : {}}
//       onChange={(event, value) => onDateChange(input, value)}
//       minutesStep={1}
//       fullWidth={fullWidth}
//       disabled={disabled}
//       floatingLabelStyle={{ color: '#32535A' }}
//       floatingLabelFocusStyle={{ color: '#32535A' }}
//     />
//   );
// };

// // const stylesDatePicker = {
// //   input: {
// //     color: '#03cccc',
// //   },
// // };
// /**
//  * @desc Datetime Picker
//  * @param {*} param0
//  */
// export const renderDateTimePicker = ({
//   input,
//   name,
//   hintText,
//   onDateChange,
//   format,
//   selected,
//   fullWidth,
//   disabled,
//   placeholder,
//   meta: { touched, error, warning } }) => {
//   return (
//     <DateTimePicker
//       {...input}
//       onChange={(event, value) => onDateChange(input, value)}
//       DatePicker={DatePickerDialog}
//       // style={stylesDatePicker.input}
//       TimePicker={TimePickerDialog} />
//   );
// };

/**
 *
 * @param {*} param0
 */
const stylesSwitch = {
  checked: {
    color: '#32535A',
  },
};
export const renderSwitch = ({
  input: { onChange, value },
  name,
  checked,
  label,
  meta: { touched, error },
}) => {
  return (
    <Switch
      name={name}
      checked={checked}
      onChange={onChange}
      style={ stylesSwitch.checked }
      aria-label={label} />
  );
};


export const renderDatePicker = ({
  input,
  type,
  name,
  label,
  id,
  autoFocus,
  maxLength,
  multiline,
  normalize,
  className,
  helperText,
  meta: { touched, error },
  customError,
  ...custom
}) => {
  return (
    <TextField
      id="datetime-local"
      label="Next appointment"
      type="datetime-local"
      // defaultValue="2017-05-24T10:30"
      // className={stylesDatePicker.textField}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};


/** *************************************** NORMALIZATIONS ***********************************************************/

export const normalizeDate = (value, previousValue) => {
  if (!value) {
    return value;
  }
  const alphaNums = value.replace(/[^\d]/g, '');
  // const alphaNums = value.replace(/[^0-9a-zA-Z+]+/g, '');
  const alphaNums1 = value.replace(/[^\a-zA-Z]/g, '');
  const alphaNums2 = value.replace(/\W/g, '');
  if (!previousValue || value.length > previousValue.length) {
    // typing forward
    if (alphaNums.length === 2) {
      return alphaNums.slice(0, 2) + '/';
    }
    if (alphaNums.length > 2 && alphaNums.length < 5) {
      return alphaNums.slice(0, 2) + '/' + alphaNums.slice(2, 4) + '/';
    }
    if (alphaNums.length > 4 && alphaNums.length < 9) {
      return alphaNums.slice(0, 2) + '/' + alphaNums.slice(2, 4) + '/' + alphaNums.slice(4, 8);
    }
    if (alphaNums.length > 8 && alphaNums.length < 13) {
      return alphaNums.slice(0, 2) + '/' + alphaNums.slice(2, 4) + '/' + alphaNums.slice(4, 8) + ' ' + alphaNums.slice(8, 10) + ':' + alphaNums.slice(10, 12);
    }
    if (alphaNums.length > 12 && alphaNums.length < 15) {
      return alphaNums.slice(0, 2) + '/' + alphaNums.slice(2, 4) + '/' + alphaNums.slice(4, 8) + ' ' + alphaNums.slice(8, 10) + ':' + alphaNums.slice(10, 12) + ' ' + alphaNums.slice(12, 14);
    }
  }
  return alphaNums.slice(0, 19);
};

export const normalizeTime = (value, previousValue) => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, '');

  if (onlyNums.length < 11) {
    console.log('yes less than 10');
  }

  if (!previousValue || value.length > previousValue.length) {
    // typing forward
    if (onlyNums.length === 3) {
      return onlyNums + ' ';
    }
    if (onlyNums.length === 6) {
      return '(' + onlyNums.slice(0, 3) + ') ' + onlyNums.slice(3) + '-';
    }
  }
  if (onlyNums.length <= 3) {
    return onlyNums;
  }
  if (onlyNums.length <= 6) {
    return '(' + onlyNums.slice(0, 3) + ') ' + onlyNums.slice(3);
  }
  return '(' + onlyNums.slice(0, 3) + ') ' + onlyNums.slice(3, 6) + '-' + onlyNums.slice(6, 10);
};


/**
 * @desc UK Phone masking.
 */
export const normalizeMobile = (value, previousValue) => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, '');

  if (onlyNums.length < 11) {
    console.log('yes less than 10');
  }

  if (!previousValue || value.length > previousValue.length) {
    // typing forward
    if (onlyNums.length === 3) {
      return onlyNums + ' ';
    }
    if (onlyNums.length === 6) {
      return '(' + onlyNums.slice(0, 3) + ') ' + onlyNums.slice(3) + '-';
    }
  }
  if (onlyNums.length <= 3) {
    return onlyNums;
  }
  if (onlyNums.length <= 6) {
    return '(' + onlyNums.slice(0, 3) + ') ' + onlyNums.slice(3);
  }
  return '(' + onlyNums.slice(0, 3) + ') ' + onlyNums.slice(3, 6) + '-' + onlyNums.slice(6, 10);
};

/**
 * @desc UK Zipcode masking.
 * @param {*} value
 * @param {*} previousValue
 */
export const normalizeZipCode = (value, previousValue) => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d\A-Z]/g, '');

  if (onlyNums.length < 5) {
    console.log('less than 5 digit');
  }

  if (!previousValue || value.length > previousValue.length) {
    // typing forward

    if (onlyNums.length < 8) {
      return onlyNums.slice(0, 7).split(/(?=.{3}$)/).join(' ');
    }
  }
  return onlyNums.slice(0, 7).split(/(?=.{3}$)/).join(' ');
};

export const toUpperCaseLetters = (value) => value && value.toUpperCase();
export const toUpperFirstLetter = (value) => value && value.charAt(0).toUpperCase() + value.substr(1);
