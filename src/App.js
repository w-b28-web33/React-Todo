import React from 'react';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import TodoItem from './components/TodoItem';

let tasks = [
  {
    task: "Organize Garage",
    id: Date.now(),
    completed: false
  },
  
  {
    task: "Bake Cookies",
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers 
  // you need to work with your state
      constructor(props) {
        super(props)
      
        this.state = {tasks}
      }
    
      addNewTask= task => {
      
        const newTask = { 
          task: task,
          id: Date.now(),
          completed: false
        };
        
        this.setState({
        tasks: [...this.state.tasks, newTask]
        })
      }
      
      // toggle completed 
      
        markCompleted = id => {
          this.setState({ tasks: this.state.tasks.map(task => {
            if(task.id === id ){
              task.completed = !task.completed
            }
            return task;
          })})
        }
        
    
      
      
      // delete a Task/Todo
      
      deleteTodo = id => {
        this.setState({ tasks: [...this.state.tasks.filter(task => task.id !== id)] })
      }
    
  
      
  
  render() {
    return (
      <div className="container">
        <h2>React Class Components Todo App!</h2>
        
        <TodoForm addTask={this.addNewTask} />
        <Todo todos={this.state.tasks} toggleComplete={this.markCompleted} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}


export default App;
