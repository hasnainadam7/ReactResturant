import React, { useState, useEffect } from "react";
import "./style.css";

const UseEffect = () => {
  // const initialData = 15;
  const [myNum, setMyNum] = useState(0);
//useEffect:after the work is done and we have to do something new or more 
    //then we render website again by using use effect,its also run if website is re-render
    //its like a side effect
    //[] array dependecy is use for only first time rendering of useEffect
  useEffect(() => {
    document.title = `Chats(${myNum})`;
  }
  //array dependecy
//   ,[]
  );

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR 
        </div>
      </div>
    </>
  );
};

export default UseEffect;