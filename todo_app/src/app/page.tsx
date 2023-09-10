import Image from 'next/image'


export default function Home() {
  return (
    <main className="flexbox relative items-center justify-between p-10 box-border">
     

      <div className='flexbox relative max-w-540 w-1/3 left-1/3 justify-between content-center'>
        <div className='inline'>
          <h1 className='text-5xl flex font-medium text-left font-Montserrat tracking-wide tracking-wide mb-8 '>PraFazê!</h1>
        </div> 
        <div className=' h-20'>
          <input
          type='text'
          placeholder='Nova Tarefa'
          className= 'relative bg-inherit border-2 border-black rounded-full w-full py-5 pl-7'
          
          />
          <button className='absolute text-[#383736] bg-inherit align-bottom bottom-[70px] p-2 right-8 font-medium uppercase cursor-pointer rounded-3xl hover:bg-[#de6c5c] hover:text-[#ffffff] ease-in duration-75' >adcionar</button>
        </div> 
        
        <div>
           <ul className='mt-5'>
                <li className='text-left text-base ml-5 cursor-pointer'>Tarefa 1</li>
            </ul>
        </div>    

      </div>
          <div>
              <div></div>
          </div>
          <div>
              <button>tudo</button>
              <button >ativas</button>
              <button>completas</button>
              <button>limpar completas</button>
          </div>

    </main>
  )
}

