import './App.css';
import { useState, useEffect, useRef} from 'react'

import Input from './components/Input'
import DropZoneViews from './components/DropZoneViews'
import image from './img/image.jpg'

function App() {
  const [file, setFile] =useState('')
  const [hightLight, setHightLight] =useState (false)
  const [pictureSrc, setPictureSrc] = useState(image)
  const isFirstRender = useRef(true)

  useEffect(()=>{
    if (isFirstRender.current){
      isFirstRender.current = false;
      return
    } else {  const reader = new FileReader();
      if (file && file.type.substr(0, 5)) {
        reader.readAsDataURL(file);
      } else {
        setPictureSrc(image);
      }
      reader.onloadend = function () {
        setPictureSrc(reader.result)
    }}
  },[file])

  function onDragEnterHandler(e) {
    setHightLight(true)
  }
  
  function onDragLeaveHandler(e) {
    setHightLight(false)
  }
  
  function onDragOverHandler(e) {
    e.preventDefault()
  }
  
  function imageHander(e) {
    const reader = new FileReader();
    reader.onload = ()=>{
      if (reader.readyState ===2) {
        setPictureSrc(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  
  function onDropHandler(e) {
   e.preventDefault() 
   if (e.target.dataset.mark === 'dropZone') { 
   const {files} =e.dataTransfer
   setFile(files[0]);
   setHightLight(false)
  } else return;
  }

  return (
    <div className="App">
      <Input onChange={imageHander}/>
      <DropZoneViews     
      onDragEnter={onDragEnterHandler} 
      onDragLeave={onDragLeaveHandler} 
      onDragOver={onDragOverHandler} 
      onDrop={onDropHandler}
      hightLight={hightLight}
      imageSrc={pictureSrc}/>
    </div>
  );
}

export default App;
