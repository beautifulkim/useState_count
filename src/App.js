import './App.css';
import { useState } from 'react';

function App() {
  const [ count, setCount ] = useState(0);
  var count2 = 0;
  return (
    <div className="App">
      <button onClick={ () => { setCount(count+1) }}>클릭하면 화면 변경</button>
      <button onClick={ () => { console.log( count2++ )} }>count2</button>
      <h2 style={{fontSize : 50}}>{count}</h2>
    </div>
  );
}

export default App;
