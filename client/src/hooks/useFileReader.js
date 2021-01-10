import { useState } from 'react';

const useFileReader = file => {
  const [imageSrc, setImageSrc] = useState(null);
  const reader = new FileReader();
  if (file && file.type.substr(0, 5) === 'image') {
    reader.readAsDataURL(file);
  } else {
    return;
  }
  reader.onloadend = function () {
    setImageSrc(reader.result);
  };
  return imageSrc;
};
export default useFileReader;
