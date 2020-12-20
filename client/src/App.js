import './App.css';
import DropZoneView from './components/dropzoneview/dropzoneview';
import InputTypeFile from './components/input/inputtypefile';

function App() {
  return (
    <div className="App">
      <InputTypeFile/>
      <DropZoneView/>
    </div>
  );
}

export default App;
