import React, {useEffect, useState} from 'react'
import axios from 'axios'
import InputForm from '../components/InputForm'
import TodoList from '../components/TodoList'


const url =`https://640e0e8d1a18a5db83875121.mockapi.io/todos`
    
const Home = () => {
 
  
 
    const[todos, setTodos] = useState<TodoType[]>([])   //todos tipi ..... yı içeren array olacak dedil

    const getTodos = async () => {
        try{
            const {data} = await axios.get<TodoType[]>(url)   // gelen datanın tipi ... yı içeren array olacak
            setTodos(data)
        }catch (error) {
                console.log(error)
        } 
    }
 
    useEffect(() =>{
        getTodos()
    }, [])
    return (
    <div className="main">
        <InputForm/>
        <TodoList todos={todos}/>  
 {/* props önce hata verdi çünkü gönderilen yerin type ı uygun değpildi orada tip tanımlaöması yaparak aldık */}
    </div>
  )
}

export default Home