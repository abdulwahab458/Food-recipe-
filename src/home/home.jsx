import React, { useContext } from 'react'
import { GlobalContext } from '../context/context';
import Recipesitem from '../recipesitem/recipesitem';

const home = () => {
  const {recipes} = useContext(GlobalContext)
  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {
        recipes&&recipes.length>0?
        recipes.map((i)=><Recipesitem key={i.id} item={i}/>)
        : <div>
          <p className='font-extrabold text-4xl'>Nothing to Show Search Something</p>
        </div>
      }
    </div>
  )
}

export default home
