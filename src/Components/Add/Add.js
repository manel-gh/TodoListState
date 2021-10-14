import React, { Component } from "react";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }
  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };
  render() {
    return (
      <div>
        <h2>AddItem</h2>
        <input onChange={this.handleChange} value={this.state.input} />
        <button
          onClick={() => {
            this.props.handleItem(this.state.input);
            this.setState({ input: "" });
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddItem;