import React , {Component}from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
      id: 1,
      title: 'take out trash',
      completed: false
      },
        {
        id: 2,
        title: 'have dinner with wife',
        completed: true
        },
      {
      id: 3,
      title: 'meeting with staff',
      completed: false
      }
    ]
  }
  
   render() {
    console.log(this.state.todos)
      return (
        <div className="App">
          <Todos todos = {this.state.todos}/>
        </div>
      );
  }
}
export default App;
