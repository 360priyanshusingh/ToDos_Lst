import React, { useState , useEffect} from 'react'

export default function AddTos(props) {
 const [title,setTitle]=useState("");
 const [dsc,setDsc]=useState("");
 const submit=(e)=>{
    e.preventDefault()
    if(!title || !dsc){
        alert("Pls enter the both Tilte and Describtion")
    }
   else{
    props.addTodos(title,dsc);
    setTitle('');
    setDsc('');
   }
 }
  return (
      <div className='container my-4'>
          <h4>Add Todos</h4>
          <form onSubmit={submit} >
              <div className="mb-3">
                  <label for="title" className="form-label"> todos Title</label>
                  <input type="text"  value={title} onChange={(e)=>{setTitle(e.target.value)}}  className="form-control" id="title" />
           
              </div>
              <div className="mb-3">
                  <label for="dsc" className="form-label">todos describtion</label>
                  <input type="text"  value={dsc} onChange={(e)=>{setDsc(e.target.value)}}  className="form-control" id="dsc"/>
              </div>
              <button type="submit" className="btn btn-sm btn-primary">Add todo</button>
          </form>
    </div>
  )
}
