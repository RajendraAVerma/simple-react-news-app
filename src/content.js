import React, { useState } from "react";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
      list: [],
    };
  }
  render() {
    return (
      <div>
        <div>
          <p>name</p>
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          />
          <p>age</p>
          <input
            type="text"
            value={this.state.age}
            name="age"
            onChange={(e) => {
              this.setState({ age: e.target.value });
            }}
          />
          <button
            onClick={() => {
              this.setState({
                list: this.state.list.concat({
                  name: this.state.name,
                  id: Date.now(),
                }),
              });
            }}
          >
            ADD
          </button>
          <h1>{this.state.name}</h1>
          <h1>{this.state.age}</h1>
          <ul>
            {this.state.list.map((item) => (
              <p>{item.name}</p>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Content;
