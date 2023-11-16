import React from 'react'
import TodosItem from './TodosItem';

export default function Todos(props) {
    
    let mystyle={
       minHeight:"31vh",
       margin:"10px auto"
    }

  return (
    <div className='container my-3' style={mystyle}>
       <h4 className='my-3'>Todos List</h4>
       {props.todo.length === 0 ? "NO TODOS LIST": props.todo.map((todo)=>{return <TodosItem todo={todo} key={props.sno} onDelete={props.onDelete}/>})}
     
    </div>
  )
}
