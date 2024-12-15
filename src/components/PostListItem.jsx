import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'

const PostListItem = () => {
  return (
    <div className=' flex flex-col xl:flex-row gap-8'>
        {/* image */}
        <div className=' md:hidden xl:block xl:w-1/3'>
            <Image src={"postImg.jpeg"} className={" rounded-2xl object-cover"} w={"735"} />
        </div>
        {/* details */}
        <div className=' flex flex-col gap-4 xl:w-2/3'>
            <Link to={"/text"} className=' text-4xl font-semibold'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ulam medi uim elan
            </Link>
            <div className=' flex items-center gap-2 text-gray-400 text-sm'>
                <span>Written by</span>
                <Link className=' text-blue-800'>John Doe</Link>
                <span>on</span>
                <Link className=' text-blue-800'>Web Design</Link>
                <span>2 days ago</span>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolor illo quasi facere cum soluta voluptatem tempora voluptates doloribus ab, 
                aliquam voluptas qui ut. Similique, deserunt! Magnam harum cum minima exercitationem.
            </p>
            <Link to={"/test"} className=' text-blue-800 text-sm underline'>Read More</Link>
        </div>
    </div>
  )
}

export default PostListItem