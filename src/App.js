import React, { Component } from "react";
import TodoList from "./Components/Todolist/Todolist";
import Add from "./Components/Add/Add";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: Math.random(), item: "task1" },
        { id: Math.random(), item: "task2" },
      ],
    };
  }
  handleItem = (item) => {
    
    if (item) {
      this.setState({
        items: [...this.state.items, { id: Math.random(), item: item }],
      });
    }
  };
  handleDelete = (id) => {
    this.setState({ items: this.state.items.filter((el) => el.id !== id) });
  };
  render() {
    return (
      <div className="App">
        <Add handleItem={this.handleItem} />
        <TodoList handleDelete={this.handleDelete} list={this.state.items} />
      </div>
    );
  }
}

export default App; 
