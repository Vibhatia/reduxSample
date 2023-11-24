import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';
const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      {
        todos.map((todo) => (
          <div key={todo.id}  onClick={()=>dispatch(removeTodo(todo.id))}>
            <h2>{todo.text}</h2>
          </div>
        )
        )

      }
    </div>
  )
}

export default Todos
