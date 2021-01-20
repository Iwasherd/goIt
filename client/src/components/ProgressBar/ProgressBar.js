import s from './ProgressBar.module.css';

const ProgressBar = ({ totalBytes, loadBytes }) => {
  const loadBar = Math.floor((loadBytes / totalBytes) * 100);

  return (
    <div className={s.wrapper}>
      <div className={s.containerStyles}>
        <div className={s.fillerStyles}>
          <span
            className={s.labelStyles}
            width={`${loadBar}%`}
          >{`${loadBar}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
