import './App.css';
import { useState } from 'react';

import Input from './components/Input';
import DropZoneViews from './components/DropZoneViews';
import image from './img/image.jpg';

function App() {
  const [pictureSrc, setPictureSrc] = useState(image);

  return (
    <div className="App">
      <Input setPictureSrc={setPictureSrc} />
      <DropZoneViews imageSrc={pictureSrc} setPictureSrc={setPictureSrc} />
    </div>
  );
}

export default App;
