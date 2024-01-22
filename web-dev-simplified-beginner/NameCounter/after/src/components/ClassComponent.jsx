import React from "react";

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Bob",
      age: 0,
    };
  }

  decreaseAge = () => {
    this.setState((currentState) => {
      return { age: currentState.age == 0 ? 0 : currentState.age - 1 };
    });
  };

  increaseAge = () => {
    this.setState((currentState) => {
      return { age: currentState.age + 1 };
    });
  };

  render() {
    const { name, age } = this.state;
    return (
      <div
        style={{ display: "inline-flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <button onClick={this.decreaseAge}>-</button>
          {age}
          <button onClick={this.increaseAge}>+</button>
        </div>
        My name is {name} and I am {age} years old.
      </div>
    );
  }
}
