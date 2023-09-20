import React from "react";
import { useState } from "react";
import TodoApp from '../components/TodoApp'
import Form from '../components/Form'
//import Search from "@/components/Search";
import Filter from "@/components/Filter";
import Image from "next/image";






export default function Home() {
  const [textInput, setTextInput] = useState('')
  const [todo,setTodos] = useState([{
    id:1,
    text:'tarefa fixa',
    isCompleted:false,
  }])
  function Add(){
    setArray(array=>[...array,textInput])

  }
  const addTodo =  (text:string) => {
    if(textInput === ' '){
      alert("Digite uma tarefa!")
    }
    else{
      const newTodos = [...todo,{
        id: Math.floor(Math.random()*1000),
        text,
        isCompleted:false
      }]
      setTodos(newTodos)
    }
  }

  const DeleteTodo = (id:Number) => {
    const newTodos= [...todo]
    const filteredTodos = newTodos.filter(todo=> todo.id!== id? todo : null);
    setTodos(filteredTodos)
  }

  const CheckTodo = (id:number) => {
    const newTodos = [...todo]
    newTodos.map((todo)=> todo.id=== id? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }



  const DeleteChecked = () => {
    const updatedTodos = todo.filter(todo => !todo.isCompleted);
    setTodos(updatedTodos)
  }

  const [search,setSearch] = useState("");
  const [filter,setFilter] = useState("All");
  
  
  return (
    <main className="relative accent-orange-200 items-center justify-between p-10 box-border max-w-full dark:bg-[#383736]  selection:text-white selection:bg-[#de6c5c] min-h-[100vh]" >
        <div  className="relative right-1/5 pr-40">
          <h1 className='absolute text-5xl flex font-medium text-left left-1/3 font-Playfair_Display tracking-wide mb-8 dark:text-white'>PraFazê!<img src='/Vector.svg' className="dark:invert"/></h1>
          <Form  addTodo= {addTodo}/>
    
          <div className='todo-list relative h-5 w-1/2 mt-20 left-1/3'>
            {todo
            .filter((todo)=> filter === "All" ? true : filter === 'Completed' ? todo.isCompleted : !todo.isCompleted)
            .filter((todo)=>
            todo.text.toLowerCase().includes(search.toLowerCase())
            )
            .map((todo)=>(
              <TodoApp key ={todo.id} todo ={todo} DeleteTodo = {DeleteTodo} CheckTodo = {CheckTodo}/>
            ))}

          </div>

          <Filter filter={filter} setFilter = {setFilter} />

          
        </div>
        
        <div className="absolute bottom-10">
            <button onClick={DeleteChecked}  className="relative rounded-full p-2 border-[2px] dark:border-white dark:text-white">Deletar Completas</button>
        </div>

        <script src="./dark.js"></script>
    </main>
  )
          }

function setArray(arg0: (array :any) => any[]) {
  throw new Error("Function not implemented.");
}

