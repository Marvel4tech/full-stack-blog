import React from 'react'
import Comment from './Comment'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const fetchComments = async (postId) => {
  try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/comments/${postId}`)
      return res.data
  } catch (error) {
      console.error("Error fetching comments:", error)
      throw error // Re-throw the error to handle it in the component
  }
}

const Comments = ({ postId }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  })

  if (isPending) return "Loading..."
  if (error) return `Something went wrong... ${error.message}`

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
        {data.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
    </div>
  )
}

export default Comments