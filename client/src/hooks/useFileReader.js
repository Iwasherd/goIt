import { useState, useMemo } from 'react';

const useFileReader = file => {
  const [imageSrc, setImageSrc] = useState(null);
  const [load, setLoad] = useState(null);
  const [total, setTotal] = useState(null);

  const reader = new FileReader();

  reader.onloadstart = function () {};
  useMemo(() => {
    if (file) {
      reader.readAsDataURL(file);
    }
  }, [file]);
  reader.onprogress = function (e) {
    const { loaded, total } = e;
    setLoad(loaded);
    setTotal(total);
  };

  reader.onloadend = function () {
    setImageSrc(reader.result);
  };

  return { imageSrc, load, total };
};
export default useFileReader;
