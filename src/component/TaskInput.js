import React, { useState } from 'react'

const TaskInput = ({addTask}) => {
    const [task, setTask] = useState('');

    function handleInputValue(e){
      setTask(e.target.value);
    }
    // console.log(task)

    function handleAddTask (event){
      event.preventDefault();
      if(task.trim() === '') return;
      addTask(task);
      setTask('')
    }
  return (
    <form className='inputfield' onSubmit={handleAddTask}>
      <input type='text' value={task} placeholder='Your Task' onChange={handleInputValue}
      />
      <button>+</button>
    </form>
  )
}

export default TaskInput


