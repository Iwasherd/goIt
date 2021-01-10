import { useState, useEffect } from 'react';

import s from './DropZoneViews.module.css';
import useFileReader from '../../hooks/useFileReader';

function DropZoneViews({ setPictureSrc, imageSrc }) {
  const [hightLight, setHightLight] = useState(false);
  const [file, setFile] = useState(null);

  const dropZoneImageHandler = useFileReader(file);
  useEffect(() => {
    if (!file) {
      return;
    }
    setPictureSrc(dropZoneImageHandler);
  }, [dropZoneImageHandler, file, setPictureSrc]);

  function onDragEnterHandler(e) {
    setHightLight(true);
  }

  function onDragLeaveHandler(e) {
    setHightLight(false);
  }

  function onDragOverHandler(e) {
    e.preventDefault();
  }

  function onDropHandler(e) {
    e.preventDefault();
    if (e.target.dataset.mark === 'dropZone') {
      const { files } = e.dataTransfer;
      setFile(files[0]);
      setHightLight(false);
    }
  }
  return (
    <>
      <div
        className={`${s.dropZone} ${hightLight ? s.hightLight : ''}`}
        data-mark="dropZone"
        onDragEnter={onDragEnterHandler}
        onDragLeave={onDragLeaveHandler}
        onDragOver={onDragOverHandler}
        onDrop={onDropHandler}
      >
        <p>Drop file here</p>
      </div>
      <img src={imageSrc} width="300" alt="random img" />
    </>
  );
}
export default DropZoneViews;
