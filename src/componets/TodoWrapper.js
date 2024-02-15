import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo';


export const TodoWrapper = () => {
    const [add, setAdd]=useState([]);

    const pross=(ad)=>{
        setAdd([...add, ad])
    }

  return (
    <div>
        <h1>{add}</h1>
        <TodoForm pross={pross} />
         <Todo add={add} /> 


    </div>
    
  )
}
