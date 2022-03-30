import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

// class Person extends Component {
//   render() {
//     return (
//       <div className="person">
//         <MyContext.Consumer>
//           {(context) => (
//             <React.Fragment>
//               <p>Age: {context.state.age}</p>
//               <p>Name: {context.state.name}</p>
//               <button onClick={context.growAYearOlder}>🍰🍥🎂</button>
//             </React.Fragment>
//           )}
//         </MyContext.Consumer>
//       </div>
//     )
//   }
// }

const Person = () => {
  const context = useContext(MyContext);
  console.log(context)
  return (
    <div className="person">
      <p>Value: {context.state.value}</p>
      <p>Number: {context.state.age}</p>
      <p>Condation: {context.state.condation}</p>
      <button onClick={context.growAYearOlder}>Increase<br/>(+)</button>
      <button onClick={context.showAlertFunc}>Decrease<br/>(-)</button>
    </div>
  );
};

export default Person;