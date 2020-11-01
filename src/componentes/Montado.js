import React from 'react'
import { Final } from './Final'
import { useFetch } from './hooks/useFetch'


export const Montado = ({lites}) => {

const {data:state,loading}=useFetch(lites);

    return (
        <>
        <p className='loading'> {loading && 'loading...'} </p>
          <h3>{lites}</h3>
          <div className='listas'>
      
        {
            state.map(imgs=>(
                <Final key={imgs.id} {...imgs}/>
            ))
        }
          </div>
    

        </>
    )
}
