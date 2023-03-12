import React from 'react'
import TodoListItem from './TodoListItem'

interface ITodoList {
    todos:TodoType[]
}
const TodoList:React.FC<ITodoList> = ({todos}) => { // şu tipte veri props alan react functional komponenttir dedik props alan comp da tip tanımlaması iyi olur
  return (
    <ul>
        { todos.map((item) => (
        <TodoListItem item={item} key={item.id}/>
        ))}
        
    </ul>
  )
}

export default TodoList