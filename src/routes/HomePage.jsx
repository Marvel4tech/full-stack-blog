import React from 'react'
import { Link } from 'react-router-dom'
import MainCategories from '../components/MainCategories'
import FeaturedPosts from '../components/FeaturedPosts'
import PostList from '../components/PostList'

const HomePage = () => {
  return (
    <div className=' mt-4 flex flex-col gap-4'>
      {/* BREADCRUMB */}
      <div className=' flex gap-4'>
          <Link to={"/"}>Home</Link>
          <span>-</span>
          <span className=' text-blue-800'>Blog and Articels</span>
      </div>

      {/* INTRODUCTION */}
      <div className=' flex items-center justify-between'>
          {/* Titles */}
          <div className=''>
              <h1 className=' text-gray-800 text-2xl md:text-3xl lg:text-4xl font-bold'>
                Welcome to LamaLog, a blog and articels platform where we share our thoughts.
              </h1>
              <p className=' mt-8 text-base md:text-xl'>
                LamaLog is a community where people come together to share their stories, ideas, and experiences. 
              </p>
          </div>
          {/* Animated Button */}
            <Link to={"/write"} className=' hidden md:block relative'>
              <svg viewBox='0 0 200 200' width="200" height="200" className=' text-lg tracking-widest'>
                <path fill='none' id='circlePath' d='M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75, 75 0 1, 1 -150, 0' />
                <text>
                  <textPath href='#circlePath' startOffset={"0%"}>
                      Write your store .
                  </textPath>
                  <textPath href='#circlePath' startOffset={"50%"}>
                      Share your idea .
                  </textPath>
                </text>
              </svg>
              <button className=' absolute top-0 right-0 left-0 bottom-0 m-auto bg-blue-800 rounded-full flex items-center justify-center w-[50px] h-[50px]'>
                ↗️
              </button>
            </Link>
      </div>

      {/* CATEGORIES */}
      <MainCategories />

      {/* FEATURED POSTS */}
      <FeaturedPosts />

      {/* POST LISTs */}
      <div className=' '>
          <h1 className=' my-8 text-2xl text-gray-600'>Recent Posts</h1>
          <PostList />
      </div>
    </div>
  )
}

export default HomePage