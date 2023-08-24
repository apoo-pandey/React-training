import { useState} from "react";
const Counter=()=>{
  //let count=0;
  let [specialCount, setspecialCount] = useState(0);
  const increase=()=>{
    setspecialCount(specialCount+1);
  }
  const decrease=()=>{
    setspecialCount(specialCount+1);
  }  
  const showcount=()=>{
    alert(specialCount); 
  };

  return(
    <div>
        <p>{specialCount}</p>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
        <button type="reset">Reset</button>
        <p></p>
    </div>
  )
}
export default Counter;