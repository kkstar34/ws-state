import { useState } from 'react';
import './App.css';


function App() {

  // let number = 0;

  const [number, setNumber] = useState(0);
  const increment = () => {

    setNumber((number) => number + 1);

    // number++;
    // console.log(number);
  }

  const decrement = () => {

    setNumber((number) => number - 1);

    // number++;
    // console.log(number);
  }
  
  return (
    <div className="App">
      <h3>Number : <span>{number}</span> </h3>
      <button onClick={increment}>Increment + </button>
      <br />
      <button onClick={decrement}>Decrement - </button>
    </div>
  );
}

export default App;
