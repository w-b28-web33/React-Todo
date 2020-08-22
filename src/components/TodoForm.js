import React, { Component } from 'react'

 class TodoForm extends Component {
 
    state = { 
        task:""
    }
    
    onChange = e => this.setState({ [e.target.name]: e.target.value })
    
    onSubmit = e => {
        e.preventDefault();
        this.props.addNewTask(this.state.task);
        this.setState({
            task: ""
        })
    }
    
    render() {
        return (
            <>
               <form onSubmit={this.onSubmit}>
                <input 
                    name="task"
                    type="text"
                    placeholder="Add New Task!"
                    value={this.state.task}
                    onChange={this.onChange}
                />
            
                <button type="submit" className="btn">Add Task</button>
               
               </form>
                
            </>
        )
    }
}

export default TodoForm;
