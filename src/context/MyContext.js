import React, { Component } from "react";

// first we will make a new context
export const MyContext = React.createContext();

// Then create a provider Component
class MyProvider extends Component {
  state = {
    name: "Bootcamp",
    age: 100,
    cool: true
  };

  growAYearOlder = () => {
    return this.setState({age: this.state.age + 1});
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          growAYearOlder: this.growAYearOlder
        }}
      />
      // >
      //   {this.props.children}
      // </MyContext.Provider>
    );
  }
}

export default MyProvider;
