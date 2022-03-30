import React, { useState } from "react";
import { MyContext } from "../context/MyContext";
import Family from "./Family";
import "./App.css";

const initialState = {
  condation: "Stabil",
  age: 100,
  value: "",
};

function App() {
  const [state, setstate] = useState(initialState);

  const growAYearOlder = () => {
    console.log("hmm");
    setstate({ ...state, age: state.age + 1,value:"+",condation:"Increase" });
  };

  const showAlertFunc = (e) => {
    // alert("hello")
    console.log(e.target)
    setstate({ ...state, age: state.age - 1,value:"-",condation:"Decrease"  })
  }

  return (
    <MyContext.Provider value={{ state, growAYearOlder,showAlertFunc }}>
      <div className="App">
        <div className={(state.value==="+")? "green":"red"}>
        <p style={{color:"red"}}>I'm a counter developed  <br/>with React-Context.</p>
        <Family/>
</div>
        
      </div>
    </MyContext.Provider>
  );
}

export default App;