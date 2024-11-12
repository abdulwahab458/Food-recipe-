import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../context/context'

const navbar = () => {
    const { searchprm, setsearchprm, handlesubmit } = useContext(GlobalContext)
    console.log(searchprm);
    return (
        <nav className='flex justify-between items-center py-8 mx-auto flex-col lg:flex-row gap-5 lg:gap-0'>
            <div className="flex items-center gap-4  p-4">
                <img
                    src="https://png.pngtree.com/template/20191015/ourmid/pngtree-chef-abstract-kitchener-cooky-icon-logo-image_317353.jpg"
                    alt="logo"
                    className="w-20 h-20 object-contain rounded-[50%]"
                />
                <h1 className="text-2xl font-extrabold text-black">
                    <NavLink to="/">Food Recipe</NavLink>
                </h1>
            </div>



            <form onSubmit={handlesubmit}>
                <input type="text"
                    onChange={(e) => setsearchprm(e.target.value)}
                    name='search'
                    placeholder='enter the food recepie you want....'
                    value={searchprm}
                    className='bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-md shadow-black' />
            </form>
            <ul className='flex gap-5'>
                <li>
                    <NavLink to={'/'} className='text-black hover:text-blue-700 duration-300'>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/favourites'} className='text-black hover:text-blue-700 duration-300'>Favourites</NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default navbar
