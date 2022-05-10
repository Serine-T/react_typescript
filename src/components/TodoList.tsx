import React from 'react';
import {ITodo} from '../interfaces'

type TodoListProps = {
  todos: ITodo[],
  onToggle(id: number): void,
  onRemove:(id: number)=> void, //optional parameter
}

const TodoList:React.FC<TodoListProps> = ({
  todos,
  onRemove,
  onToggle
})=> {
  const removeHandler = (event: React.MouseEvent, id: number)=>{
    event.preventDefault();
    onRemove(id)
  }


  return (
    <ul>
      {
        todos.map(todo => {
          const {id, title, completed} = todo
          return (      
            <li className='todo' key={id}>
            <label>
              <input 
                type="checkbox" 
                checked={completed}
                onChange={onToggle?.bind(null, id)} 
              />
              <span>{title}</span>
              <i 
                className='material-icons red-text' 
                onClick={e =>removeHandler(e, id)}>delete</i>
            </label>
          </li>
          )
        })
      }
    </ul>
  )
}

export default TodoList