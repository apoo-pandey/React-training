import {useState} from 'react';
const Assignment1=()=>{
    let [step,setstep]=useState(3);
    let [specialCount, setspecialCount] = useState(0);
    const increase=()=>{
      setspecialCount(specialCount+step);
    }
    const decrease=()=>{
      setspecialCount(specialCount-step);
    }  
    const reset=()=>{
      setspecialCount(specialCount=0);
    };
    return(
      <div>
          <h1>Assignment 1</h1>
          <p>{specialCount}</p>
          <button onClick={increase}>increase</button>
          <button onClick={decrease}>decrease</button>
          <button onClick={reset}>Reset</button>
          <p></p>
      </div>
    )
  }
  export default Assignment1;