import React from 'react';
import './App.css';
import { DropzoneWrapper } from './Components/pdfviewer/dropzonewrapper/dropzonewrapper'

function App() {
  return (
    <div className="App">
      <main style={{'position':'relative'}}>
        <DropzoneWrapper />
      </main>
    </div>
  );
}

export default App;
