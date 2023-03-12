import React from 'react'

const InputForm = () => {
 
 
    return (
        <div className="input-form">
            <input type="text" className="input-task" placeholder='Enter the todo...' maxLength={40}/>
            <button className="btn-hover btn-color" type='submit'>Add New Todo</button>
        </div>
  )
}

export default InputForm