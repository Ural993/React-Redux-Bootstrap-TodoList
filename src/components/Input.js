import React, { useState } from 'react'

export const Input = ({addPost})=>{

    const [title, setTitle] = useState('')
    const handlePress =(e)=>{
        if(e.key === 'Enter'){
            addPost(title)
            setTitle('')
        }
    }
    return(
        <div className='input'>
            <input 
                className="form-control" 
                type="text" 
                placeholder="Что нового?" 
                value= {title}
                onChange={(e)=>{setTitle(e.target.value)}}
                onKeyPress ={handlePress}
                >
            </input>
        </div>
    )
}