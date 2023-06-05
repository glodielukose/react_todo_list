import React from 'react'

import {
        MdDelete
} from 'react-icons/md'

function Todo({name, completed, id, deleteTask, toogleTaskCompleted}) {
  

  const handleChange = (e) => {
    e.preventDefault()

    toogleTaskCompleted(id)
  }

  const handleClick = (e) => {
    e.preventDefault()

    deleteTask(id)
  }

  return (
    <li>
      <div className="task">
        <input 
          type="checkbox"  
          id={id} 
          checked={completed}
          onChange={handleChange}
        />
        <label htmlFor={id}>{name}</label>
      </div>

      <div className="btn-group">
        <MdDelete 
          onClick={handleClick}
          className="btn-option"
        ></MdDelete>
      </div>
    </li>
  )
}

export default Todo
