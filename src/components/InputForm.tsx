import React, { useState } from 'react'

interface IInputForm {
    addTodo:AddFn; // :(text:string) => void demek aslında aynı şey
}


const InputForm:React.FC<IInputForm> = ({addTodo}) => {
 
    const handleClick = () =>{
            addTodo(task)
            setTask("") 
    }

    const [task, setTask] = useState("") //taskı string olarak okudu type tanımlamasına gerek kalmadı tip tahmini yaptı

    return (
        <div className="input-form">
            <input 
            value={task} 
            onChange={(e)=> setTask(e.target.value)}
            type="text" 
            className="input-task" 
            placeholder='Enter the todo...' 
            maxLength={40}/>
            
            
            <button 
            disabled={!task} //başlangıç değeri false yazınca true olacak o yüzden değiline göre tuş çalışsın clicklensin
            onClick={handleClick} 
            className="btn-hover btn-color" 
            type='submit'>Add New Todo</button>
        </div>
  )
}

export default InputForm