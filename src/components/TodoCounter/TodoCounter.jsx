import React from 'react'
import './TodoCounter.css'

export default function TodoCounter({total,completed}) {
  if(total === completed){
    return(
      <h1 className='todoCounter'>Felicidades!!! Has completado todas las tareas</h1>
    )}else{
      return (
        <h1 className='todoCounter'>Has completado <span>{completed}</span> de <span>{total}</span> TODOS</h1>
      )
  }
}
