import React, { useState } from 'react'

export const Formulary = ({setlists}) => {

    const [values, setvalues] = useState('');

    const valuesChange=(e)=>{
      setvalues(e.target.value);
    }

    const enter=(e)=>{
e.preventDefault();

   if(values.trim().length>2){
        setlists(newValor=>[values,...newValor]);
        setvalues('')
        }
    }

    return (
        <form onSubmit={enter}>
            <input 
            type='text'
            value={values}
            placeholder='tu busqueda poyuelo'
            onChange={valuesChange}
            />
        </form>
    )
}
