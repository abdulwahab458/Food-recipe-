import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/context'

const Details = () => {
  const { id } = useParams()
  const { recipedetails, setrecipedetails,handleaddfav,favlist } = useContext(GlobalContext)

  useEffect(() => {
    async function recepiedt() {
      console.log(id)
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      const data = await res.json()
      setrecipedetails(data)
    }
    recepiedt()
  }, [id])

  // console.log(recipedetails)
  // console.log(recipedetails?.data?.recipe?.ingredients);
  

  return (
    <div className="flex">
      <div className="w-[50%] h-full overflow-hidden rounded-xl">
        <img
          className="w-full h-full object-cover transition-transform transform hover:scale-110 rounded-xl"
          src={recipedetails?.data?.recipe?.image_url}
          alt="Recipe"
        />
      </div>
      <div className=" w-[20%] mx-4 h-100%">
        <span className="text-xl font-semibold ml-6 mt-5">{recipedetails?.data?.recipe?.publisher}</span>
        <h3 className='font-bold text-3xl p-2 ml-5'>{recipedetails?.data?.recipe?.title}</h3>
        <button onClick={()=>handleaddfav(recipedetails?.data?.recipe)} className="px-4 py-2 mt-4 ml-9 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
          {
            favlist&&favlist.length>0&&favlist.findIndex((item) => item.id === recipedetails?.data?.recipe?.id) !== -1?"Remove from Favourites":"Add to Favourites"
          }
        </button>

      </div>
      <div className="text-2xl font-semibold mb-7 ">Ingredients:
      <ul className="space-y-4">
  {recipedetails?.data?.recipe?.ingredients.map((i, index) => (
    <li
      key={index}
      className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md"
    >
      <span className="text-lg font-medium text-gray-700">
        {i.quantity || '-'} {i.unit || ''}
      </span>
      <span className="text-lg text-gray-900 font-semibold">
        {i.description}
      </span>
    </li>
  ))}
</ul>
      </div>
    </div>


  )
}

export default Details
