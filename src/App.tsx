import React from 'react';
import './App.css';
import { Dragndrop } from './Components/dragndrop/dragndrop'

function App() {
  return (
    <div className="App">
      <main style={{'display': 'flex', 'justifyContent': 'center', 'position': 'relative'}}>
        <Dragndrop>
          <p> Drop Here! </p>
        </Dragndrop>
      </main>
    </div>
  );
}

export default App;
