import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import styles from './DropZoneView.module.css';

const DropZoneView = ({ isActive, onDragToggle, onDrop, onDragOver }) => {
  const classes = classNames(styles.dropzone, { [styles.active]: isActive });
  return (
    <div
      className={classes}
      onDragEnter={onDragToggle}
      onDragLeave={onDragToggle}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <p>Drop file here</p>
    </div>
  );
};

export default DropZoneView;

DropZoneView.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onDragToggle: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  onDragOver: PropTypes.func.isRequired,
};
