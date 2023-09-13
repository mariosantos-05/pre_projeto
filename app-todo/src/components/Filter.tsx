import React from 'react'

import RootLayout from '@/layout'

const Filter = ({filter,setFilter}) => {
  return (
    <div className='filter'>
        <div className="filter-options rounded p-2">
            <div>
                <select className='rounded-full p-2 dark:bg-[#383736] dark:text-white  outline-none border-2 border-black dark:border-white '  value ={filter} onChange={(e)=>setFilter(e.target.value)}>
                    <option  className='dark:text-white hover:bg-[#de6c5c] active:bg-[#de6c5c]' value="All">Todas</option>
                    <option  className='dark:text-white hover:bg-[#de6c5c]' value="Completed">Completas</option>
                    <option  className='dark:text-white hover:bg-[#de6c5c]' value="Incompleted">Incompletas</option>
                </select>
            </div>
            
        </div>
        
    </div>
  )
}

export default Filter