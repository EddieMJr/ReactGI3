import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import'./Hard.css'

function HardJr() {
const [tasks, setTasks] = useState([])
const [newTask, setNewTask] = useState('')

const addTask = () => {
  if (newTask.trim() !== '') {
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
    setNewTask('')
  }
}

const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id))
}

const toggleCompleted = (id) => {
  setTasks(tasks.map(task => 
    task.id === id ? {...task, completed: !task.completed} : task
  ))
}

return (
    <main>
        <h1 style={{margin: "1rem"}}>Challenge: Hard</h1>
        <section className='topList__section'>
              <h2>Long-Term To Do List!</h2>
              <button>
                <Link to="/hard">Short-Term Tasks</Link>
              </button>
              </section>
              <section style={{margin: "1rem"}}>
                  <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task..."
                  />
                  <button onClick={addTask}>Add Task</button>
                  <ul>
                    {tasks.map(task => (
                      <li key={task.id}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleCompleted(task.id)}
                  />
                  <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    {task.text}
                  </span>
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                </li>
                    ))}
                  </ul>
              </section>
    </main>
  );
}

export default HardJr