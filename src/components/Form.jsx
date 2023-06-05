import React, { useState } from 'react'


function Form({addTasks}) {
  const [name, setName] = useState("")

  const handleChange = (e) => {
    e.preventDefault()

    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (name === "") {
      alert("Votre champ est vide")
    } else {
      addTasks(name)
    }
    

    setName("")
  }


  return (
    <form onSubmit={handleSubmit} className="form"  >

      <input 
        type="text" 
        id="new-todo-input"
        autoComplete="off"
        value={name}
        placeholder="... nouvelle tâche"
        onChange={handleChange}
         />

      <button 
        type="submit"
        className="btn"
        >Ajouter</button>
    </form>
  )
}

export default Form
