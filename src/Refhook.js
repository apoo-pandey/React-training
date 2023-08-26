import { useRef } from "react";
function Refhook() {
  const inputnameRef = useRef(null);
  const inputcityRef = useRef(null);
  const h1Ref = useRef(null);
  const showValues = () => {
    let nameOb = inputnameRef.current;
    let cityOb = inputcityRef.current;
    const h1Ob = h1Ref.current;
    console.log(nameOb);
    console.log(cityOb);
    alert(nameOb.value);
    alert(cityOb.value);
    h1Ob.textContent = `Name=${nameOb.value} and city=${cityOb.value}`;
  };
  return (
    <div>
      <h1 ref={h1Ref}></h1>
      <input className="hook" type="text" name="name" ref={inputnameRef} />
      <input className="hook" type="text" name="name" ref={inputcityRef} />
      <button onClick={showValues}>Show Values</button>
    </div>
  );
}

export default Refhook;
