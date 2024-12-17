import React from 'react'
import Comment from './Comment'

const Comments = () => {
  return (
    <div className=' flex flex-col gap-8 lg:w-3/5'>
        <h1 className=' text-xl text-gray-500 underline'>Comments</h1>
        <div className=' flex items-center justify-between w-full gap-8'>
            <textarea 
                placeholder=' Write a comment...'
                className=' w-full rounded-xl p-4'
            />
            <button className=' bg-blue-800 px-4 py-3 text-white font-medium rounded-xl'>
                Send
            </button>
        </div>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
    </div>
  )
}

export default Comments