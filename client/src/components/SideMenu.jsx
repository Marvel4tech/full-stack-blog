import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

const SideMenu = () => {
  return (
    <div className=' h-max top-8 sticky px-4'>
        <h1 className=' font-medium text-sm mb-4'>Search</h1>
        <Search />
        <h1 className=' font-medium text-sm mb-4 mt-8'>Filter</h1>
        <div className=' text-sm flex flex-col gap-2'>
            <label htmlFor="" className=' flex gap-2 cursor-pointer items-center'>
                <input 
                    type="radio" 
                    name='sort' 
                    value={"newest"} 
                    className=' appearance-none h-4 w-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800' 
                />
                Newest
            </label>
            <label htmlFor="" className=' flex gap-2 cursor-pointer items-center'>
                <input 
                    type="radio" 
                    name='sort' 
                    value={"popular"} 
                    className=' appearance-none h-4 w-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800' 
                />
                Most Popular
            </label>
            <label htmlFor="" className=' flex gap-2 cursor-pointer items-center'>
                <input 
                    type="radio" 
                    name='sort' 
                    value={"trending"} 
                    className=' appearance-none h-4 w-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800' 
                />
                Trending
            </label>
            <label htmlFor="" className=' flex gap-2 cursor-pointer items-center'>
                <input 
                    type="radio" 
                    name='sort' 
                    value={"oldest"} 
                    className=' appearance-none h-4 w-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800' 
                />
                Oldest
            </label>
        </div>
        <h1 className=' font-medium text-sm mb-4 mt-8'>Categories</h1>
        <div className=' flex flex-col gap-2'>
            <Link className=' underline' to={"/posts"}>All</Link>
            <Link className=' underline' to={"/posts?cat=web-design"}>Web Design</Link>
            <Link className=' underline' to={"/posts?cat=development"}>Development</Link>
            <Link className=' underline' to={"/posts?cat=databases"}>Databases</Link>
            <Link className=' underline' to={"/posts?cat=seo"}>Search Engines</Link>
            <Link className=' underline' to={"/posts?cat=marketing"}>Marketing</Link>
        </div>
    </div>
  )
}

export default SideMenu