import { useState, useEffect } from 'react';
import useFileReader from '../../hooks/useFileReader';

function Input({ setPictureSrc }) {
  const [file, setFile] = useState(null);
  const inputImageHandler = useFileReader(file);
  useEffect(() => {
    if (!file) {
      return;
    }
    setPictureSrc(inputImageHandler);
  }, [file, inputImageHandler, setPictureSrc]);

  const onChangeHandler = ({ target }) => {
    setFile(target.files[0]);
  };
  return (
    <>
      <input type="file" onChange={onChangeHandler} />
    </>
  );
}

export default Input;
