import React from 'react'

interface IListItem {
item: TodoType
}

const TodoListItem:React.FC<IListItem> = ({item}) => {
  return (
    <li>
        <p className="checked">Todo</p>
        <span className="task-icons">x</span>
    </li>
  )
}

export default TodoListItem