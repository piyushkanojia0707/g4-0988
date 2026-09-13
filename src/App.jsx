// import { useState } from 'react'
// import './App.css'
// counter buttonn 
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>
//         count is {count}
//       </button>
//     </>
//   )
// }
// export default App

/// hello msg
// import React from "react";
// function App() {
//   return (
//     <div
//       className="fyc"
//       style={{
//         minHeight: "100dvh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center"
//       }}
//     >
//       <div className="card" style={{ textAlign: "center" }}>
//         <h2>Hello!</h2>
//         <h3>Entering into the region of react...</h3>
//       </div>
//     </div>
//   );
// }
// export default App;

// import { useState } from "react";
// import "./App.css";

// counter + and -
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="counter-container">
//       <h1>My Counter</h1>

//       <div className="counter">
//         <button className="minus" onClick={() => setCount(count - 1)}>
//           −
//         </button>

//         <div className="number">{count}</div>

//         <button className="plus" onClick={() => setCount(count + 1)}>
//           +
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;

//counter 2
import React, { useState } from "react";
//import './App.css'
function App(p) //p is parameter
{
  const [count,setCount]=useState(0);

  function handleClick1()
  {
    setCount((ps) => ps+1); //ps->previous state eg 98->ps = ps+1 -> 99 
  }
  function handleClick2()
  {
    setCount((ps) => ps-1);
  }

  return (
    <section className="fyc bg1">
    <div className="fxc" style={{border: "1px solid"}}>
      <button onClick={handleClick1}>{p.x}</button>
      <span style={{width:"3rem",textAlign:"center"}}>{count}</span>
      <button onClick={handleClick2}>{p.y}</button>
    </div>
    </section>
  );
}
export default App;

