import React from 'react';
import propTypes from 'prop-types';

const DropZoneView = ({ handleDrop, handleDragEnter, handleDragLeave, isActive }) => {
  return (
    <div className="file__container">
      <input className="file__input" type="file" />

      <div
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        className={`file__drop ${isActive && 'file__drop-active'}`}
      >
        drop your files here
      </div>
    </div>
  );
};

DropZoneView.propTypes = {
  handleDragEnter: propTypes.func,
  handleDragLeave: propTypes.func,
  handleDrop: propTypes.func,
  isActive: propTypes.bool,
};

export default DropZoneView;
