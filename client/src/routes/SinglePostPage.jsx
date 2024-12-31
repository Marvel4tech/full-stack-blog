import React from 'react'
import Image from '../components/Image'
import { Link, useParams } from 'react-router-dom'
import PostMenuAction from '../components/PostMenuAction'
import Search from '../components/Search'
import Comments from '../components/Comments'
import { useQuery } from "@tanstack/react-query"
import axios from 'axios'
import { format } from 'timeago.js'
import DOMPurify from "dompurify"


const fetchPost = async (slug) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`)
        return res.data
    } catch (error) {
        console.error("Error fetching single post:", error)
        throw error // Re-throw the error to handle it in the component
    }
}

const SinglePostPage = () => {
    const { slug } = useParams()

    const { isPending, error, data } = useQuery({
        queryKey: ["post", slug],
        queryFn: () => fetchPost(slug),
    })

    if (isPending) return "Loading..."
    if (error) return `Something went wrong... ${error.message}`
    if (!data) return "Post not found"

    // Sanitize the HTML content using DOMPurify
    const sanitizedContent = data ? DOMPurify.sanitize(data.content) : ""

  return (
    <div className=' flex flex-col gap-8'>
      {/* detail */}
      <div className=' flex gap-8'>
          <div className=' flex flex-col gap-8 lg:w-3/5'>
              <h1 className=' text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>
                {data.title}
              </h1>
              <div className=' flex items-center text-sm gap-2 text-gray-400'>
                <span>Written by</span>
                <Link className=' text-blue-800'>{data.user.username}</Link>
                <span>on</span>
                <Link className=' text-blue-800'>{data.category}</Link>
                <span>{format(data.createdAt)}</span>
              </div>
              <p className=' text-gray-500 font-medium'>
                {data.desc}
              </p>
          </div>
          {data.img && <div className=' hidden lg:block w-2/5'>
              <Image src={data.img} w={"600"} className={" rounded-2xl"} />
          </div>}
      </div>

      {/* content */}
      <div className=' flex flex-col md:flex-row gap-12'>
        {/* text */}
        <div className=' lg:text-lg flex flex-col gap-6 text-justify'>
            {/* Render sanitized HTML content */}
            <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
        </div>
        {/* menu */}
        <div className=' px-4 h-max sticky top-8'>
            <h1 className=' text-sm mb-4 font-medium'>Author</h1>
            <div className=' flex flex-col gap-4'>
              <div className=' flex items-center gap-8'>
                  {data.user.img && <Image src={data.user.img} className={" w-12 h-12 rounded-full object-cover"} w={"48"} h={"48"} />}
                  <Link className=' text-blue-800'>
                      {data.user.username}
                  </Link>
              </div>
              <p className=' text-sm text-gray-500'>
                  Lorem ipsum dolor sit amet consectetur adipisicing
              </p>
              <div className=' flex gap-2'>
                  <Link>
                      <Image src={"facebook.svg"} />
                  </Link>
                  <Link>
                      <Image src={"instagram.svg"} />
                  </Link>
              </div>
            </div>
            <PostMenuAction />
            <h1 className=' text-sm mt-8 mb-4 font-medium'>Categories</h1>
            <div className=' flex flex-col gap-2 text-sm'>
              <Link className=' underline'>All</Link>
              <Link className=' underline' to={"/"}>
                  Web Design
              </Link>
              <Link className=' underline' to={"/"}>
                  Development
              </Link>
              <Link className=' underline' to={"/"}>
                  Databases
              </Link>
              <Link className=' underline' to={"/"}>
                  Search Engines
              </Link>
              <Link className=' underline' to={"/"}>
                  Marketing
              </Link>
              <h1 className=' text-sm mt-8 mb-4 font-medium'>Search</h1>
              <Search />
            </div>
        </div>
      </div>
      <Comments />
    </div>
  )
}

export default SinglePostPage