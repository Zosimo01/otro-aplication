import React, { useState } from 'react'
import { Formulary } from './Formulary';
// import { Promise } from './helpers/Promise';
import { Montado } from './Montado';

export const Listas = () => {

    const [lists, setlists] = useState(['dog']);

// Promise();
    return (
        
            <>

        <Formulary setlists={setlists} /> 
   
         {lists.map(lites=>(
                <Montado key={lites} lites={lites}/>
            ))}
            
        </>
    )
}
