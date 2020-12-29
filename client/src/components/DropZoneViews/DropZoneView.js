import s from './DropZoneViews.module.css'

function DropZoneViews({onDragEnter,onDragLeave,onDragOver,onDrop,hightLight,imageSrc}) {

 return (
   <>
    <div  className={`${s.dropZone} ${hightLight ? s.hightLight: ''}`} 
    data-mark='dropZone'
    onDragEnter={onDragEnter} 
    onDragLeave={onDragLeave} 
    onDragOver={onDragOver} 
    onDrop={onDrop}>
    <p>Drop file here</p>
    </div>
    <img src={imageSrc} width='300' alt="random img"/> 
</>
  );
}
export default DropZoneViews;