import React, {useEffect, useState} from 'react'
import axios from 'axios'
import InputForm from '../components/InputForm'
import TodoList from '../components/TodoList'


const url =`https://640e0e8d1a18a5db83875121.mockapi.io/todos`

const Home = () => {
 
    const[todos, setTodos] = useState<TodoType[]>([])   //todos tipi ..... yı içeren array olacak dedik
    const getTodos = async () => {
        try{
            const {data} = await axios.get<TodoType[]>(url)   // gelen datanın tipi ... yı içeren array olacak
            setTodos(data)
        }catch (error) {
                console.log(error)
        } 
    }

    const addTodo:AddFn = async (text) => {
            const newTodo = {
                task: text,
                isDone: false
            }
            try {
                await axios.post(url, newTodo)
                getTodos() //ekleme yaptık ama görebilmek için çağırmamız lazım
            } catch (error) {
                
            }
    } //oluşturduğumuz yeni newTodo yu API ye gönderdik
 
const toggleTodo:ToggleFn = async (item) => {
    try {
        await axios.put(`${url}\${id}`, {...item, isDone:!item.isDone}) //itemlkerden tıklananın id sine göre itema ulaş o itemin isdone ını değiştir
        getTodos(); // değişiklikler ile tekrar çağır
    } catch (error) {
        console.log(error)
    }
}

const deleteTodo:DeleteFn = async (id) => {
    try {
        await axios.delete(`${url}\${id}`)
        getTodos()
    } catch (error) {
        console.log(error)
    }
}

    useEffect(() =>{
        getTodos()
    }, [])




    return (
    <div className="main">
        <InputForm addTodo={addTodo}/>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>  
 {/* props önce hata verdi çünkü gönderilen yerin type ı uygun değpildi orada tip tanımlaöması yaparak aldık */}
    </div>
  )
}

export default Home