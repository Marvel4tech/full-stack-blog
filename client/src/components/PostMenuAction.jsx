import React from 'react'

const PostMenuAction = () => {
  return (
    <div>
        <h1 className=' text-sm mt-8 mb-4 font-medium'>Actions</h1>
        <div className=' flex items-center gap-2 py-2 text-sm cursor-pointer'>
            <span>✅</span>
            <span>Save this Post</span>
        </div>
        <div className=' flex items-center gap-2 py-2 text-sm cursor-pointer'>
            <span>❌</span>
            <span>Delete this Post</span>
        </div>
    </div>
  )
}

export default PostMenuAction