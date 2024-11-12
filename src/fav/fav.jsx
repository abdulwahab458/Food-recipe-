import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/context'
import Recipesitem from '../recipesitem/recipesitem';

const fav = () => {
  const {favlist} = useContext(GlobalContext)
  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {
        favlist&&favlist.length>0?
        favlist.map((i)=><Recipesitem key={i.id} item={i}/>)
        : <div>
          <p className='font-extrabold text-4xl'>No favourites</p>
        </div>
      }
    </div>
  )
}

export default fav
