import React from 'react'

export const Final = ({title,url}) => {
    return (
        <div className='finalys'>
                <img  className='finaly' src={url} alt={title}/>
            <p> {title} </p>
        </div>
    )
}
