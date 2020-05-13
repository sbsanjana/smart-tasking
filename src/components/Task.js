import React from 'react';


const Task = props => {
    return (
        <div>
            key = {props.task.id} 
            onClick = {props.markComplete}
            <p>{props.task.name}</p>
        </div>
      
    );
}

export default Task;