import {useState} from 'react';
import addTodo from '../pages/index';

const Form = ({addTodo}: any) => {
    const[value,setValue] = useState("");
   
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if(!value) return;
        else addTodo(value)
        setValue("")
        
        console.log(value)
      }
  return( <div className="bg-inherant relative top-20 max-w-540 w-1/2 left-1/3 justify-between content-center">
    
    <form onSubmit = {handleSubmit}>
        <input 
        value = {value} 
        type="text" 
        placeholder='Nova Tarefa'
        className= 'relative bg-inherit border-2 border-black rounded-full w-full py-5 pl-7 dark:border-white dark:text-white focus-none outline-none' 
        onChange = {(e)=>setValue(e.target.value)}/>
        <button type ='submit' className='absolute text-[#383736] bg-inherit p-2 right-6 top-[14px] font-medium uppercase cursor-pointer rounded-3xl hover:text-[#ffffff] hover:bg-[#de6c5c] 
          transition ease-in-out delay-150  hover:scale-110  duration-100  dark:text-white'>Adicionar</button>
    </form>

  </div>)
}

export default Form