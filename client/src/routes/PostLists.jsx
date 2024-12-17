import React, { useState } from 'react'
import PostList from '../components/PostList'
import SideMenu from '../components/SideMenu'

const PostLists = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
        <h1 className=' mb-8 text-2xl'>Development Blog</h1>
        <button onClick={() => setOpen(prev => !prev)} className=' bg-blue-800 text-white text-sm rounded-2xl md:hidden py-2 px-4 mb-4'>
          {open ? "Close" : "Filter or Search"}
        </button>
        <div className=' flex flex-col-reverse md:flex-row gap-8'>
            <div>
                <PostList />
            </div>
            <div className={`${open ? "block" : "hidden"} md:block`}>
                <SideMenu />
            </div>
        </div>
    </div>
  )
}

export default PostLists