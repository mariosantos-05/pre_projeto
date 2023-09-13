import React from 'react'

const TodoApp = ({todo,DeleteTodo,CheckTodo}: any) => {
  return (
    <div className='todo pl-[20px] relative' style ={{
      textDecoration:todo.isCompleted ? "line-through " : " "
    }}>
    

              <div className='content'>
                <p className='relative left-[40px] top-4'>{todo.text}</p>
                </div>
                <div>
                  <button  onClick={()=>CheckTodo(todo.id)} className='relative bg-center bg-slate-500 rounded-full h-4 w-4  active:bg-[#de6c5c]'>.</button>
                  <button className = 'remove absolute className="absolute bg-inherant hover:bg-[#de6c5c] hover:text-white right-12 px-2  top-4 rounded transition ease-in-out delay-150 bg-inherit  hover:scale-110 duration-80s' onClick={()=>DeleteTodo(todo.id)}>x</button>
                </div>

            </div>
  )
}

export default TodoApp