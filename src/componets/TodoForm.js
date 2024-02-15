import React from 'react'
import { useState } from 'react'

export const TodoForm = ({pross}) => {
    const [todo, setTodo] =useState("");

   const handlesubmit=(e)=>{
       e.preventDefault()
       pross(todo)
       setTodo("")

   }
   

  return (
    <form onSubmit={handlesubmit}>
        <input type='text' placeholder='enter item' value={todo} onChange={(e)=>
        setTodo(e.target.value)}/>
        <button type='submit'> +</button>
    </form>
  )
}
