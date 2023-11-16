import React from 'react'

export default function Footer() {
    let footersytle= {
        position: "absolute",
        top:  "100vh",
        width: "100%"
    }

  return (
    <div className='bg-dark text-light py-3 ' >
         <p className='text-center'>Copyright &copy : priyanshutodoslist.com</p>
    </div>
  )
}
