import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, minusNumber } from "./redux/modules/prectice";

function App() {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);

  const globalNumber = useSelector((state)=> state)
  console.log(globalNumber)

  return (
    <div>
      <div>{globalNumber}</div>
      <input type="number" onChange={(e)=> {setNumber(Number(e.target.value))}}/>
      <button onClick={()=> dispatch(addNumber(number))}>더하기</button>
      <button onClick={()=> dispatch(minusNumber(number))}>빼기</button>
    </div>
  );
}

export default App;
