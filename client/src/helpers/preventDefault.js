const preventDefault = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

export default preventDefault;
