import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 더하기, 빼기 } from "./redux/modules/prectice";

function App() {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);

  const globalNumber = useSelector((state)=> state.counter.number)
  console.log(globalNumber)



  return (
    <div>
      <div>{globalNumber}</div>
      <input type="number" onChange={(e)=> {setNumber(+(e.target.value))}}/>
      <button onClick={()=> dispatch(더하기(number))}>더하기</button>
      <button onClick={()=> dispatch(빼기(number))}>빼기</button>
    </div>
  );
}

export default App;
