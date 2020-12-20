import React from 'react';
import propTypes from 'prop-types';

const PreviewView = ({ img, loading }) => {
  return (
    <div className="preview__container">
      {loading && 'loading ...'}
      {img && <img className='preview__img' src={img} alt="img" />}
    </div>
  );
};

PreviewView.propTypes = {
  img: propTypes.object,
  loading: propTypes.bool,
};

export default PreviewView;
