import React, {useEffect, useState} from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { ITodo } from '../interfaces';

const TodosPage:React.FC =()=>{
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
    setTodos(saved)
  }, [])

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const addHandler = (title: string)=> {
    // console.log('Add todo: ', title)
    const newTodo: ITodo = {
      id: Date.now(),
      title: title,
      completed: false,
    }
    setTodos([newTodo, ...todos]);
  };

  const removeHandler=(id: number)=>{
    const shouldRemove = window.confirm('you want to delete item. Are you sure?')
    if(shouldRemove) {
      setTodos(todos.filter(todo=> todo.id !== id));
    }

  };

  const toggleHandler=(id: number)=>{
    const newTodos = todos.map(todo =>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })
   setTodos(newTodos)
  };

  return (
    <>
      <TodoForm onAdd={addHandler} />
        <TodoList 
          todos={todos} 
          onRemove={removeHandler} 
          onToggle={toggleHandler} 
        />
    </>
  )
}

export default TodosPage