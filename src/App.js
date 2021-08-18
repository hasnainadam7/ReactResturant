import React from "react"
import {Resturant} from "./Components/Basics/Resturant"
// import  UseState  from "./Components/hooks/UseState"
// import UseEffect from "./Components/hooks/UseEffect"
// import UseReducer from "./Components/hooks/UseReducer"
const App = () => {
  return (

    <div>
      <h1>
       
        <Resturant />
              </h1>
    </div> 
    
  )
}
// how react actually works
// const App = () => {
//   return (
//     React.createElement(
//       "div",
//       {},
//       React.createElement("h1", {}, "hello world"))
//   )
// }

export default App
