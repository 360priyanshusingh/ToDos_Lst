import React from 'react'

export default function TodosItem({todo,onDelete,sno}) {
  return (
    <div className='container my-3'>
        <h4>{todo.title}</h4>
        <p>{todo.dsc}</p>
        <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}> delete</button>
    </div>
  )
}
