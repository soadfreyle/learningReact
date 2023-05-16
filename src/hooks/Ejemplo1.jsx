import { useState } from "react"
import React  from 'react';

export default function Ejemplo1() {
    //variables
    const valorInicial = 0;

    const personaInicial = {
        name: 'soad',
        email: 'soadfre@gmail.com'
    }
    /*valorInicial y personaInicial que sean parte del estado 
    del componente, para gestionar el cambio y se ve reflejado
    en la vista del componente.
    const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
    */
   const [contador, setContador] = useState(valorInicial)
   const [persona, setPersona] = useState(personaInicial)
   /*funcion para actualizar el estado privado 
   que contiene el contador
   */
  function incrementarContador(){
    setContador(contador + 1)
  }

  function actualizarPersona() {
    setPersona({
        name: 'Jose Pablo',
        email: 'josePablo@gmail.com'
    })
  }

  return (
    <div>
        <h1>Ejemplo useState()</h1>
        <h2>CONTADOR: {contador}</h2>
        <h2>DATOS DE LA PERSONA</h2>
        <h3>NOMBRE: {persona.name}</h3>
        <h4>EMAIL: {persona.email}</h4>
        <button onClick={incrementarContador}>Incrementar</button>
        <button onClick={actualizarPersona}>Actualizar Personas</button>
    </div>
  )
}
