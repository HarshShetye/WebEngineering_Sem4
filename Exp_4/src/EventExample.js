// import React, { useState } from "react";

// function EventExample() {
//   const [count, setCount] = useState(0);

//   function handleIncrement() {
//     setCount(count + 1);
//   }

//   function handleDecrement() {
//     setCount(count - 1);
//   }

//   return (
//     <div>
//       <h3>Raising and Handling Events</h3>
//       <h4>Count: {count}</h4>
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//     </div>
//   );
// }

// export default EventExample;

import React from "react";
export default function EventExample(props) {
  function handleClick(e) {
    e.preventDefault();
    console.log(e.target[0].value);
  }
  return (
    <div>
      <h2>
        Enter Your name {props.name}
        <form action="#" onSubmit={handleClick}>
          <input type="text" />
          <div>
            <button type="submit">Click</button>
          </div>
        </form>
      </h2>
    </div>
  );
}
