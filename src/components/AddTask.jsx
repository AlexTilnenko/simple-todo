import React, { useState } from "react";
import PropTypes from 'prop-types';

function AddTask({addTask}) {
  const [value, setValue] = useState('');

  function updateValue(e) {
   setValue(e.target.value)

  }
  function submit(e) {
   e.preventDefault();

   if(value.trim()) {
      addTask(value)
      setValue('')
   } else {
       
   }
}
  return (
    <form 
      className="todo__add-task"
      onSubmit={submit}
      action="true">
      <input
        onChange={updateValue}
        value={value}
        className="todo__add-task-field"
        type="text"
        placeholder="Введите текст задачи" />
      <button className="todo__add-task-btn" type="submit">
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1V15"
            stroke="grey"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 8H15"
            stroke="grey"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
}

AddTask.propTypes = {
   addTask: PropTypes.func.isRequired,
}

export default AddTask;
