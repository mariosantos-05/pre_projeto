'use client'
import React, { useState } from "react"
import { todoObject } from "./models/Todo";
import {v4 as uuid} from 'uuid';
import Image from "next/image";
import Script from "next/script";
import { KeyboardEvent } from 'react';



const Home: React.FC = () =>  {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<todoObject[]>([]);
  const addTodo = () =>{
    if(todo === ''){
      alert("Você deve digitar algo!");
      
    }
    else{
      setTodos([{id: uuid(), value: todo, done: false}, ...todos])
      setTodo('');  
    }      
  }

  const deleteTodo = (id: string) =>{
    var newTodos = todos.filter((todo) =>todo.id !== id);
    todos(newTodos);

  }

  const markTodoDone = (id: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, done: !todo.done} : todo));

  }

  /*const KeyboardEvent = (e: KeyboardEvent<HTMLImageElement>) => {
    // Do something
    if(e.key === 'Enter'){
      () => addTodo();
    }
  }*/

  return (
    <main className="relative accent-orange-200 items-center justify-between p-10 box-border selection:text-white selection:bg-[#de6c5c] min-h-[100vh]">


      <div className='relative max-w-540 w-1/3 left-1/3 justify-between content-center'>
        <div className='inline'>
          <h1 className='text-5xl flex font-medium text-left font-Montserrat  tracking-wide mb-8 '>PraFazê!<img src="/Vector.svg"/></h1>
        </div> 
        <div className=' h-20'>
          <input 
          id="input-box"
          type='text'
          placeholder='Nova Tarefa'
          className= 'relative bg-inherit border-2 border-black rounded-full w-full py-5 pl-7'
          onChange={(e) => setTodo(e.target.value)}
          
          value={todo}
          />
          <button className='absolute text-[#383736] bg-inherit p-2 right-6 top-[93px] font-medium uppercase cursor-pointer rounded-3xl hover:text-[#ffffff] hover:bg-[#de6c5c] 
          transition ease-in-out delay-150  hover:scale-110  duration-100'
          
          onClick={()  => addTodo()}
          >adcionar</button>
          
        </div>     

        <div className="content-center">
        <div className=" select-none text-center content-center  text-[17px] pb-20">
           <ul className='mt-5'>
            {
              todos.map(todo => (
                <li
                  onClick={() => markTodoDone(todo.id)}
                  className={`text-left text-base ml-5 cursor-pointer  ${todo.done ? 'text-[#555] line-through'  : 'no-underline'}`}>
                  {todo.value}
                  <button className="absolute bg-inherant hover:bg-[#de6c5c] hover:text-white right-2 px-2 rounded transition ease-in-out delay-150 bg-inherit  hover:scale-110 duration-80s "
                onClick={() => deleteTodo(todo.id)}
                >x</button>
                </li>
                
              ))
            }
                
            </ul>
        </div>
        </div>
      





      </div>
      
      <div className="absolute inline content-center bottom-[30px] w-[90%] justify-items-start">          
        <button className="mr-20 relative transition ease-in-out delay-150 bg-inherit  hover:scale-110 duration-100">tudo</button>
        <button className="mr-20 relative transition ease-in-out delay-150 bg-inherit  hover:scale-110 duration-100">ativas</button>
        <button className="relative transition ease-in-out delay-150 bg-inherit  hover:scale-110 duration-100">completas</button>
        <button className="content-end right-2 absolute transition ease-in-out delay-150 bg-inherit  hover:scale-110 duration-100">limpar completas</button>
      </div>

    </main>
  )
}

export default Home;
