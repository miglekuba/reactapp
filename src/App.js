import React from "react";
import "./App.css";

class App extends React.Component {
  increaseCounter = () => {
    this.setState({ number: this.state.number + 1 });
  };
  handleForm = (event) => {
    event.preventDefault();
    this.setState({ todos: [...this.state.todos, this.state.todo] })
  };
  handleChange = (event) => {
  this.setState({todo: event.target.value});
  }

  constructor() {
    super();
    this.state = {
      number: 0,
      todos: [],
      todo: ""
    };
    
  }

  render() {
    const listItems = this.state.todos.map((todo) => <li>{todo}</li>);
    return (
      <div>
        <form onSubmit={this.handleForm}>
          <label>
            To do List:
          <input type="text" name="name" onChange={this.handleChange} />          
          <ul>{listItems}</ul>  
          </label>
          <input type="submit" value="Submit" />
        </form>
        <br></br>
        <button onClick={this.increaseCounter}> CLICK ME</button>
        <h1>{this.state.number}</h1>
      </div>
    );
  }
}

export default App;
