import React from 'react'

export const Todo = (props) => {
    const count ="abcdstjyuuhguui"
    const a = props.add
    const b = a.map((mp)=>{
        <li> {mp}</li>
    })
    
  return (
    <section>
        <h1> {props.add} </h1>
       <h2>  <ul> {b.length}</ul> </h2>
       
    </section> 
       
         
    

  )
}
