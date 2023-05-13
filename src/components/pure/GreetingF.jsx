import React, {useState} from 'react'
import PropTypes from 'prop-types'

function GreetingF(props) {
    //introduccion useState
    const [age, setAge] = useState(29);

    const birthday = () => {
        setAge(age +1)
    }
  return (
    <div>
       <h1>
        Hola {props.name} desde un componente funcional
        </h1>
        <h2>Mi edad es: {age}</h2>
        <div>
        <button onClick={birthday}>
          Cumplir años
        </button>
        </div>
    </div>
  )
}

GreetingF.propTypes = {
    name: PropTypes.string,
}

export default GreetingF
