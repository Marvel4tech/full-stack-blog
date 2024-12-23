import React from 'react'
import PostListItem from './PostListItem'
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

// fetch Post Funtion that is being used inside the react query below
const fetchPost = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`)
  return res.data
}

// React Query
const PostList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => fetchPost()
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  console.log(data)
  //

  return (
    <div className=' flex flex-col gap-12 mb-8'>
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
    </div>
  )
}

export default PostList