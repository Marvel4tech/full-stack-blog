import React from 'react'
import Image from '../components/Image'
import { Link } from 'react-router-dom'
import PostMenuAction from '../components/PostMenuAction'
import Search from '../components/Search'
import Comments from '../components/Comments'

const SinglePostPage = () => {
  return (
    <div className=' flex flex-col gap-8'>
      {/* detail */}
      <div className=' flex gap-8'>
          <div className=' flex flex-col gap-8 lg:w-3/5'>
              <h1 className=' text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi omnis
              </h1>
              <div className=' flex items-center text-sm gap-2 text-gray-400'>
                <span>Written by</span>
                <Link className=' text-blue-800'>John Doe</Link>
                <span>on</span>
                <Link className=' text-blue-800'>Web Design</Link>
                <span>2 days ago</span>
              </div>
              <p className=' text-gray-500 font-medium'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugit hic enim ut voluptates. 
                Architecto labore consequatur hic asperiores, ab, magni voluptate aut amet nemo commodi, 
                corrupti reiciendis? Veritatis, quasi.
              </p>
          </div>
          <div className=' hidden lg:block w-2/5'>
              <Image src={"postImg.jpeg"} w={"600"} className={" rounded-2xl"} />
          </div>
      </div>

      {/* content */}
      <div className=' flex flex-col md:flex-row gap-12'>
        {/* text */}
        <div className=' lg:text-lg flex flex-col gap-6 text-justify'>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quaerat accusamus facilis, veritatis labore corrupti excepturi temporibus numquam 
                tenetur aliquid eveniet dolorum quo libero dicta voluptate recusandae? 
                Cum quae ducimus voluptatum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quaerat accusamus facilis, veritatis labore corrupti excepturi temporibus numquam 
                tenetur aliquid eveniet dolorum quo libero dicta voluptate recusandae? 
                Cum quae ducimus voluptatum!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quaerat accusamus facilis, veritatis labore corrupti excepturi temporibus numquam 
                tenetur aliquid eveniet dolorum quo libero dicta voluptate recusandae? 
                Cum quae ducimus voluptatum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quaerat accusamus facilis, veritatis labore corrupti excepturi temporibus numquam 
                tenetur aliquid eveniet dolorum quo libero dicta voluptate recusandae? 
                Cum quae ducimus voluptatum!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quaerat accusamus facilis, veritatis labore corrupti excepturi temporibus numquam 
                tenetur aliquid eveniet dolorum quo libero dicta voluptate recusandae? 
                Cum quae ducimus voluptatum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quaerat accusamus facilis, veritatis labore corrupti excepturi temporibus numquam 
                tenetur aliquid eveniet dolorum quo libero dicta voluptate recusandae? 
                Cum quae ducimus voluptatum!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quaerat accusamus facilis, veritatis labore corrupti excepturi temporibus numquam 
                tenetur aliquid eveniet dolorum quo libero dicta voluptate recusandae? 
                Cum quae ducimus voluptatum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quaerat accusamus facilis, veritatis labore corrupti excepturi temporibus numquam 
                tenetur aliquid eveniet dolorum quo libero dicta voluptate recusandae? 
                Cum quae ducimus voluptatum!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quaerat accusamus facilis, veritatis labore corrupti excepturi temporibus numquam 
                tenetur aliquid eveniet dolorum quo libero dicta voluptate recusandae? 
                Cum quae ducimus voluptatum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quaerat accusamus facilis, veritatis labore corrupti excepturi temporibus numquam 
                tenetur aliquid eveniet dolorum quo libero dicta voluptate recusandae? 
                Cum quae ducimus voluptatum!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quaerat accusamus facilis, veritatis labore corrupti excepturi temporibus numquam 
                tenetur aliquid eveniet dolorum quo libero dicta voluptate recusandae? 
                Cum quae ducimus voluptatum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quaerat accusamus facilis, veritatis labore corrupti excepturi temporibus numquam 
                tenetur aliquid eveniet dolorum quo libero dicta voluptate recusandae? 
                Cum quae ducimus voluptatum!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quaerat accusamus facilis, veritatis labore corrupti excepturi temporibus numquam 
                tenetur aliquid eveniet dolorum quo libero dicta voluptate recusandae? 
                Cum quae ducimus voluptatum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quaerat accusamus facilis, veritatis labore corrupti excepturi temporibus numquam 
                tenetur aliquid eveniet dolorum quo libero dicta voluptate recusandae? 
                Cum quae ducimus voluptatum!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quaerat accusamus facilis, veritatis labore corrupti excepturi temporibus numquam 
                tenetur aliquid eveniet dolorum quo libero dicta voluptate recusandae? 
                Cum quae ducimus voluptatum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quaerat accusamus facilis, veritatis labore corrupti excepturi temporibus numquam 
                tenetur aliquid eveniet dolorum quo libero dicta voluptate recusandae? 
                Cum quae ducimus voluptatum!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quaerat accusamus facilis, veritatis labore corrupti excepturi temporibus numquam 
                tenetur aliquid eveniet dolorum quo libero dicta voluptate recusandae? 
                Cum quae ducimus voluptatum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quaerat accusamus facilis, veritatis labore corrupti excepturi temporibus numquam 
                tenetur aliquid eveniet dolorum quo libero dicta voluptate recusandae? 
                Cum quae ducimus voluptatum!
            </p>
        </div>
        {/* menu */}
        <div className=' px-4 h-max sticky top-8'>
            <h1 className=' text-sm mb-4 font-medium'>Author</h1>
            <div className=' flex flex-col gap-4'>
              <div className=' flex items-center gap-8'>
                  <Image src={"userImg.jpeg"} className={" w-12 h-12 rounded-full object-cover"} w={"48"} h={"48"} />
                  <Link className=' text-blue-800'>
                      John Doe
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