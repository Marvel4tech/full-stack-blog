import React from 'react'
import PostListItem from './PostListItem'
import { useInfiniteQuery } from "@tanstack/react-query"
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component"

// fetch Post Funtion that is being used inside the react query below
const fetchPost = async (pageParam) => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
      params: { page: pageParam, limit: 2 },
    });
    console.log('API Response:', res.data); // Log the API response
    return res.data;
  } catch (error) {
    console.error('API Call Error:', error); // Log any errors
    throw error; // Rethrow the error to be caught by React Query
  }
}

// React Query
const PostList = () => {
  const {data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam = 1 }) => fetchPost(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.hasMore ? pages.length + 1 : undefined,
  })

  console.log('Query Data:', data); // Log the data from the query

  if (status === "loading") return 'Loading...'

  if (status === error) return 'Something went wrong'

  const allPosts = data?.pages?.flatMap(page => page.posts) || []
  //console.log('All Posts:', allPosts); // Log the flattened posts array

  console.log(data)

  return (
    <InfiniteScroll
      dataLength={allPosts.length} //This is important field to render the next data
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading more posts...</h4>}
      endMessage={
        <p>
          <b>All Posts is loaded</b>
        </p>
      }
    >
      {allPosts.map((post) => (
          <PostListItem key={post._id} post={post} />
      ))}
    </InfiniteScroll>       
  )
}

export default PostList