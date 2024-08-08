import { useState } from 'react';
import './App.css';

import TaskInput from './component/TaskInput';
import TaskItem from './component/TaskItem';

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) =>{
    const newTask = {
      taskName ,
      checked : false
    };
    setToDoList([...toDoList, newTask]);
  }
  console.log(toDoList);
  return (
      <>
      <div className='container'>
        <h1>My Todo-List</h1>

        <TaskInput addTask={addTask}/>

        <div className='toDoList'>
          <span>To Do</span>
          <ul className='list-items'>
            {toDoList.map((item) => {< TaskItem />})}
          </ul>
        </div>
      </div>
      </>
  )
}

export default App;


