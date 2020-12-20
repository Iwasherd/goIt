import React, { useState } from 'react';
import './App.css';
import DropZone from './containers/DropZone';
import Preview from './containers/Preview';

function App() {
  const [file, setFile] = useState(null);
  console.log("🚀 ~ file: App.js ~ line 8 ~ App ~ file", file)
  return (
    <div className="App">
      <DropZone setFile={setFile} />
      <Preview img={file} />
    </div>
  );
}

export default App;
