import React from 'react'
import TodoListItem from './TodoListItem'



const TodoList:React.FC<ITodoList> = ({todos, toggleTodo, deleteTodo}) => { // şu tipte veri props alan react functional komponenttir dedik props alan comp da tip tanımlaması iyi olur(react.fc)
  return (
    <ul>
        { todos.map((item) => (
        <TodoListItem item={item} key={item.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        ))}
        
    </ul>
  )
}

export default TodoList