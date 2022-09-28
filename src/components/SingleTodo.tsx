import React from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

type SingleTodoProps = {
    todo: Todo
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setTodos}: SingleTodoProps) => {

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) => 
            todo.id === id ? {...todo, isDone: !todo.isDone} : todo 
                    )
                )
        }
    


  return (
    <form className='todos__single' action="">
        <span className='todos__single--text'>{todo.todo}</span>
        <div>
        <span className='icon'>
            <AiFillEdit/>
        </span>
        <span className='icon'>
            <AiFillDelete/>
        </span>
        <span className='icon' onClick={() => handleDone(todo.id)}>
            <MdDone/>
        </span>
        </div>
    </form>
  )
}

export default SingleTodo