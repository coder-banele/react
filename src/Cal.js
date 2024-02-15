import React,{useState} from 'react'

export const Cal = () => {
    const [add, setAdd]= useState(0);
    const ad =()=>{
        setAdd(add+1)
    };
    const handlesubmit=e=>{
        e.preventDefault();
    }
    const clear=()=>{
        setAdd(0);

    }

  return (
    <form className='increment' onSubmit={handlesubmit}>
        <h1> { add}</h1>
        <button type="submit" onClick={ad}>+</button>
        <button type='submit' onClick={clear}>clear</button>

    </form>
  )
}
