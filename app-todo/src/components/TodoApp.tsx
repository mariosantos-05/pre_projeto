import React from 'react'

const TodoApp = ({todo,DeleteTodo,CheckTodo}: any) => {
  return (
    <div className='todo pl-[20px] relative dark:text-white' style ={{
      textDecoration:todo.isCompleted ? "line-through" : ""
    }}>
    

              <div className='content'>
                <p className='relative left-[40px] top-4 dark:text-white'>{todo.text}</p>
                </div>
                <div>
                  <button onClick={()=>CheckTodo(todo.id)} className='relative font-bold dark:text-white bottom-2  hover:bg-[#de6c5c] rounded w-5 h-5'>✓</button>
                  <button className = 'remove absolute className="absolute bg-inherant hover:bg-[#de6c5c] hover:text-white right-12 px-2  top-4 rounded transition ease-in-out delay-150 bg-inherit  hover:scale-110 duration-80s dark:text-white' onClick={()=>DeleteTodo(todo.id)}>x</button>
                </div>

            </div>
  )
}

export default TodoApp