import PropTypes from 'prop-types';
import React, { useState } from 'react';
import DropZoneView from '../components/DropZoneView/DropZoneView';
import preventDefault from '../helpers/preventDefault';

const DropZone = ({ setFile }) => {
  const [isActive, setIsActive] = useState(false);
  const onDragToggle = () => {
    setIsActive((state) => !state);
  };
  const onDrop = (e) => {
    preventDefault(e);
    setIsActive(false);
    const { dataTransfer } = e;
    if (dataTransfer) {
      const [file] = dataTransfer.files;
      setFile(file);
    }
  };

  return (
    <DropZoneView
      isActive={isActive}
      onDragToggle={onDragToggle}
      onDrop={onDrop}
      onDragOver={preventDefault}
    />
  );
};

export default DropZone;

DropZone.propTypes = {
  setFile: PropTypes.func.isRequired,
};
