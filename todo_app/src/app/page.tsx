'use client'
import React, { useState } from "react"
import { todoObject } from "./models/Todo";
import {v4 as uuid} from 'uuid';
import Image from "next/image";


const Home: React.FC = () =>  {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<todoObject[]>([]);
  const addTodo = () =>{
    setTodos([{id: uuid(), value: todo, done: false}, ...todos])
    setTodo('');
      
  }

  const markTodoDone = (id: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, done: !todo.done} : todo));

  }

  return (
    <main className="relative accent-orange-200 items-center justify-between p-10 box-border selection:text-white selection:bg-[#de6c5c] min-h-[100vh]">


      <div className='relative max-w-540 w-1/3 left-1/3 justify-between content-center'>
        <div className='inline'>
          <h1 className='text-5xl flex font-medium text-left font-Montserrat tracking-wide tracking-wide mb-8 '>PraFazê!<img src="/Vector.svg"/></h1>
        </div> 
        <div className=' h-20'>
          <input
          type='text'
          placeholder='Nova Tarefa'
          className= 'relative bg-inherit border-2 border-black rounded-full w-full py-5 pl-7'
          onChange={(e) => setTodo(e.target.value)} 
          value={todo}
          />
          <button className='absolute text-[#383736] bg-inherit p-2 right-6 top-[93px] font-medium uppercase cursor-pointer rounded-3xl hover:text-[#ffffff] hover:bg-[#de6c5c] 
          transition ease-in-out delay-150 bg-inherit  hover:scale-110 hover:bg-[#de6c5c] duration-100

          '
          
          onClick={()  => addTodo()}
          >adcionar</button>
          
        </div>     

        <div className="content-center">
        <div className=" select-none text-center content-center px-12 text-[17px] pb-20">
           <ul className='mt-5'>
            {
              todos.map(todo => (
                <li 
                  onClick={() => markTodoDone(todo.id)}
                  className={`text-left text-base ml-5 cursor-pointer ${todo.done ? 'line-through ' : 'no-underline'}`}>
                  {todo.value}
                </li>
              ))
            }
                
            </ul>
        </div>
        </div>


      </div>
      
      <div className="absolute inline content-center bottom-[30px] w-[100vh]">          
        <button>tudo</button>
        <button >ativas</button>
        <button>completas</button>
        <button>limpar completas</button>
      </div>

    </main>
  )
}

export default Home;
