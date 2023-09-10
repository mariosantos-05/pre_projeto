import Image from 'next/image'

export default function Home() {
  return (
    <main className="flexbox relative items-center justify-between p-10">
      <div className='flexbox relative max-w-540 w-full left-1/3 content-center'>
        <h1 className='text-5xl flex font-medium text-left font-Montserrat tracking-wide tracking-wide mb-8 '>PraFazê!</h1>
        <div className='flex h-10 gap-y-0.5'>
          <input
          type='text'
          placeholder='Nova Tarefa'
          className=' border-2 border-black rounded-full w-1/3 py-8 pl-7'
          
          />
          <button>adcionar</button>
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
