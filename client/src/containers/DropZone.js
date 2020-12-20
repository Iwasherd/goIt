import React, { useState } from 'react';
import DropZoneView from '../components/DropZoneView/DropZoneView';
// import propTypes from 'prop-types';

const DropZone = () => {
  const [active, setActive] = useState(false);
  const onDragToggle = () => {
    setActive((state) => !state);
  };

  return <DropZoneView active={active} onDragToggle={onDragToggle} />;
};

export default DropZone;
