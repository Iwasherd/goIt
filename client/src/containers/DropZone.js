import React, { useState } from 'react';
import propTypes from 'prop-types';

import DropZoneView from '../components/DropZoneView';

const DropZone = ({ setFile }) => {
  const [isActive, setIsActive] = useState(false);

  const prevents = (e) => {
    e.persist();
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    prevents(e);

    setIsActive(false);
    const { dataTransfer } = e;
    if (dataTransfer) {
      const [file] = dataTransfer.files;
      setFile(file);
    }
  };

  const handleDragEnter = (e) => {
    prevents(e);
    setIsActive(true);
  };

  const handleDragLeave = (e) => {
    prevents(e);
    setIsActive(false);
  };

  return (
    <DropZoneView
      handleDrop={handleDrop}
      handleDragEnter={handleDragEnter}
      handleDragLeave={handleDragLeave}
      isActive={isActive}
    />
  );
};

DropZone.propTypes = {
  setFile: propTypes.func.isRequired,
};

export default DropZone;
