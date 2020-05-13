import React from 'react';
import Task from './Task'

const RenderTask = props => {
    return (
        <div>
            {props.tasks.map((task, id) => (
                <Task
                    task={task}
                    key={id}
                    toggleComplete={props.markComplete}/>
                ))}
        </div>
       
      
    );
}

export default RenderTask;