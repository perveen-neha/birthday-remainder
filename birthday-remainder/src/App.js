import React, {useState} from 'react';
import './App.css';
import list from './list'; //how comoe

function App() {
  const [People, setPeople] = useState();
  
  return (
    <div className="App">
      <h3>Birthdays Today</h3>
      <list 
      People={People} 
      setPeople={setPeople}
      />
    </div>
  );
}

export default App;
