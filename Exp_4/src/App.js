// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// // import React from "react";
// // import ReactDOM from "react-dom";
// // import MyComponent from "./MyComponent";

// // const App = () => {
// //   return (
// //     <div>
// //       <MyComponent />
// //       <MyComponent />
// //     </div>
// //   );
// // };

// // ReactDOM.render(<App />, document.getElementById("root"));
import React from "react";
import SingleElement from "./SingleElement";
import MultiElement from "./MultiElement";
import UserDefinedComponent from "./UserDefinedComponent";
import ImportCSS from "./ImportCSS";
import PropsExample from "./PropsExample";
import EventExample from "./EventExample";
import StateExample from "./StateExample";

function App() {
  return (
    <div>
      <h1>React Application Examples</h1>
      <h2>1. Rendering Single Element:</h2>
      <SingleElement />
      <hr />
      <h2>2. Rendering Component with Multiple Elements:</h2>
      <MultiElement />
      <hr />
      <h2>3. User Defined Component:</h2>
      <UserDefinedComponent />
      <hr />
      <h2>4. Importing and Using CSS:</h2>
      <ImportCSS />
      <hr />
      <h2>5. Props Example:</h2>
      <PropsExample name="Harsh Shetye" age={21} />
      <hr />
      <h2>6. Raising and Handling Events:</h2>
      <EventExample />
      <hr />
      <h2>7. Using React State Hook:</h2>
      <StateExample />
    </div>
  );
}

export default App;
