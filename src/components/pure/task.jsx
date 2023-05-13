import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'

const taskComponent = ({ task }) => {
  return (
    <div>
       <h2>
        Nombre: { task.name }
       </h2> 
       <h3>
        Descripcion: { task.descripcion }
       </h3>
       <h4>
        Level: { task.level}
       </h4>
       <h5>
        This task is: { task.descripcion ? 'COMPLETED':'PENDING'}
       </h5>

    </div>
  )
}

taskComponent.propTypes = {
    task : PropTypes.instanceOf(Task)
}

export default taskComponent
