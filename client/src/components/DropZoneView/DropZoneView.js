import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import styles from './DropZoneView.module.css';

const DropZoneView = ({ active, onDragToggle }) => {
  const classes = classNames(styles.dropzone, { [styles.active]: active });
  return (
    <div
      className={classes}
      onDragEnter={onDragToggle}
      onDragLeave={onDragToggle}
    >
      <p>Drop file here</p>
    </div>
  );
};

export default DropZoneView;

DropZoneView.propTypes = {
  active: PropTypes.bool.isRequired,
  onDragToggle: PropTypes.func.isRequired,
};
