import React, { useState, useEffect, useMemo, useCallback } from 'react';
import propTypes from 'prop-types';

import PreviewView from '../components/PreviewView';

const Preview = ({ img }) => {
  const fileReader = useMemo(() => new FileReader(), []);

  const [loading, setLoading] = useState(false);
  const [previewImg, setPreviewImg] = useState(null);

  const startReading = useCallback((file) => {
    fileReader.onloadstart = () => setLoading(true);
    fileReader.onloadend = () => setLoading(false);
    fileReader.onprogress = (e) => console.log('propgress', e);
    fileReader.onload = (e) => hundleLoaded(e);

    fileReader.readAsDataURL(file);
  }, []);

  useEffect(() => {
    if (img) {
      startReading(img);
    }
  }, [img, startReading]);


  const hundleLoaded = (e: ProgressEvent<FileReader>, delay: number) => {
    const file = e.target && e.target.result;
    setPreviewImg(file);
  };

  return <PreviewView loading={loading} img={previewImg} />;
};

Preview.propTypes = {
  img: propTypes.object,
};

export default Preview;
