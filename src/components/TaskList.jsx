import React from "react";
import TaskItem from './TaskItem';
import PropTypes from 'prop-types';

function TaskList({tasks, toggleTask, removeTask}) {

  return (
   <ul className="todo__list">
      {tasks.length > 0 ?
         tasks.map((task, index) => {
         return <TaskItem 
                  task={task} 
                  key={index}
                  toggleTask={toggleTask}
                  removeTask={removeTask}/>
      }) : <div className="no-task">Добавьте свою первую задачу</div>}
   </ul>
  )
}

TaskList.propTypes = {
   tasks: PropTypes.arrayOf(PropTypes.object),
   toggleTask: PropTypes.func,
   removeTask: PropTypes.func,
}

export default TaskList;
