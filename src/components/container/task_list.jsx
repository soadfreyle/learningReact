import React from 'react'
import { LEVELS} from '../../models/levels.enum'
import { Task } from '../../models/task.class'


const tasklistComponent = () => {
    const defaultTask = new Task('Example', 'Deafult description', false, LEVELS.NORMAL);

  return (
    <div>
        <div>
            <h1>Your Tasks:</h1>
        </div>
        {/*To DO Aplicar un For/Map para renderizar una lista*/}
        <taskComponent task={defaultTask}></taskComponent>
    </div>
  )
}



export default tasklistComponent
