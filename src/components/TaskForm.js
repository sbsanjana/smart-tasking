import React from 'react';
import './Task'


const TaskForm = props => {
    return (
        <form>
        <input
          name='task'
          value={props.value}
          type='text'
          placeholder='Add Task' />
        <button
          onClick={props.addTask}>Add a Task</button>
        <button onClick={props.removeItems}>Remove Completed</button>
      </form>
       
      
    );
}

export default TaskForm;