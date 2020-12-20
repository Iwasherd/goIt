import React from 'react';
// import PropTypes from 'prop-types';
import s from './input.module.css';

function InputTypeFile() {
  return (
    <input type='file' className={s.input} />
  );
}

export default InputTypeFile;