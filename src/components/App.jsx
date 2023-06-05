import React, { useState } from 'react'
//import des composants
import Todo from './Todo'
import Form from './Form'

import { nanoid } from 'nanoid'


function App(props) {

  const [tasks, setTasks] = useState(props.tasks)

  const addTasks = (name) => {
    const newTask = {id: `todo-${nanoid()}`, name: name, completed: false}

    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    const remainingTasks = tasks.filter(task =>  id !== task.id)

    setTasks(remainingTasks)
  }

  const toogleTaskCompleted = (id) => {
    const updateTasks = tasks.map(task => {
      if(id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task
    })

    setTasks(updateTasks)
  }

  const taskList = tasks.map(task => {
    return <Todo 
      id = {task.id}
      name = {task.name}
      completed = {task.completed} 
      key= {task.id}
      deleteTask={deleteTask}
      toogleTaskCompleted={toogleTaskCompleted}
    />
  })

  const myh2 = tasks.length > 1 ? <h2>Il reste {tasks.length} tâches</h2> :
  <h2>Il reste {tasks.length} tâche</h2>

  return (
    <div className="app container">
      <h1>To Do</h1>
      <Form 
        addTasks={addTasks}
      />
      {myh2}
      <ul>
        {taskList}
      </ul>
    </div>
  )
}

export default App
