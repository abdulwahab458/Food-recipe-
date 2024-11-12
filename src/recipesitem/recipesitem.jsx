import React from 'react'
import { NavLink } from 'react-router-dom'

const recipesitem = ({item}) => {
  return (
    <div className='flex flex-col w-80 hover:scale-110 duration-75 overflow-hidden p-5 bg-white/75  gap-5 border-2 shadow-xl rounded-xl border-white'>
      <div className='h-40 flex justify-center overflow-hidden items-center rounded-xl'>
        <img src={item.image_url} alt="recipe item" />
      </div>
      <div>
        <span className='text-2xl hover:text-blue-700 font-medium'>{item.publisher}</span>
        <h3 className='font-bold text-xl p-2'>{item.title}</h3>
        <NavLink className='bg-black rounded-md p-2 px-8 mt-5 font-medium text-white'  to={`/recepie-item/${item.id}`}> Recipe Details</NavLink>
      </div>
    </div>
  )
}

export default recipesitem
