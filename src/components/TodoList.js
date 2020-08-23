// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
 

  return (
    <div className="App">
      {props.todos.map((item) => {
        return <Todo key={item.id} item={item} toggleItem={props.toggleItem} />;
      })}
      
      <button className="clear-btn" onClick={props.deleteCompleted}>
        Clear Completed (Click on Div First)
      </button>
    </div>
  );
};

export default TodoList;