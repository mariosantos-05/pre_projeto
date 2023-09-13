import React from 'react'

import RootLayout from '@/layout'

const Filter = ({filter,setFilter}) => {
  return (
    <div className='filter'>
        <div className="filter-options">
            <div>
                <select value ={filter} onChange={(e)=>setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incompleted">Incompletas</option>
                </select>
            </div>
            
        </div>
        
    </div>
  )
}

export default Filter