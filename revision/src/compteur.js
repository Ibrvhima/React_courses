import { useState } from "react";

export default function Counter() {
  const [count, setIncremente] = useState(0);

  const handelClick = () => {
    setIncremente(count + 1);
    
  };

  return (
    <>
      <h1>Conpteur de clics</h1>
      <p>{count}</p>
      <button onClick={handelClick}>+</button>
    </>
  );
}
