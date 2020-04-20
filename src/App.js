import React , {Component}from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/AddToDo';

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
        completed: false
        },
      {
      id: 3,
      title: 'meeting with staff',
      completed: false
      }
    ]
  }
  
  // Toggle Complete
  markComplete = (id) => {
    this.setState( {todos:this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }


//delete todo
  delTodo = (id) => {
      this.setState( {todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

   render() {
      return (
        <div className="App">
          <div class="container">
          <Header />
          <AddTodo />
          <Todos todos = {this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
          </div>
        </div>
      );
  }
}
export default App;
