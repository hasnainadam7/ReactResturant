import React, { useReducer } from "react";
import "./style.css";

//useReducer is use for huge projects while useState is use for smal tasks 

//
const reducer = (state, action) => {
    if (action.type === "INCR") {
        state = state + 1;
    }

    if (state > 0 && action.type === "DECR") {
        state = state - 1;
    }
    return state;
};

const UseReducer = () => {
    // const initialData = 15;
    //   const [myNum, setMyNum] = React.useState(0);
    const intialData = 0;
    // firt value is current state ,and 2nd is dispatch method we will not change currnet value by dispatch 
    //it takes 2 arrguments reducer Function,intial data
    //we use dispatch  to to call reducer function

    const [state, dispatch] = useReducer(reducer, intialData);

    return (
        <>
            <div className="center_div">
                <p>{state}</p>
                <div class="button2" onClick={() => dispatch({ type: "INCR" })}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span> 
                    INCR
                </div>
                <div class="button2" onClick={() => dispatch({ type: "DECR" })}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>
            </div>
        </>
    );
};

export default UseReducer;