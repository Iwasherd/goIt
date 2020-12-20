import { useState } from 'react';
import Input from './components/Input/Input';
import DropZone from './containers/DropZone';

import './App.css';

function App() {
  const [file, setFile] = useState(null);
  if (file) {
    console.log('file uploaded: ', file);
  }
  return (
    <div className="App">
      <Input />
      <DropZone setFile={setFile} />
    </div>
  );
}

export default App;
