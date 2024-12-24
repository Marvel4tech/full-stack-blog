import { useAuth, useUser } from '@clerk/clerk-react'
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from 'react-quill-new';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Write = () => {
  const { isLoaded, isSignedIn } = useUser()
  const { getToken } = useAuth()
  const [value, setValue] = useState("")

  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: async (post) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, post, {
        headers:{
          Authorization: `Bearer ${token}`,
        }
      });
    },
    onSuccess: (res) => {
      console.log(res); // Log the response to check the structure
      toast.success('Post is created successfully')
      navigate(`/${res.data.post.slug}`)
    }
  });

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  if (isLoaded && !isSignedIn) {
    return <div>Please sign in to write a post.</div>
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const data = {
      title: formData.get('title'),
      category: formData.get('category'),
      desc: formData.get('desc'),
      content: value,
    }
    console.log(data)

    mutation.mutate(data)
  }

  return (
    <div className=' h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
        <h1 className=' text-xl font-light'>Create a New Post</h1>
        <form onSubmit={handleSubmit} className=' flex flex-col gap-6 flex-1 mb-6'>
            <button className='w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white'>Add a Cover Image</button>
            <input 
              type="text" 
              placeholder=' Title'
              className=' font-semibold text-4xl bg-transparent outline-none'
              name='title'
            />
            <div className=' flex items-center gap-4'>
                <label className=' text-sm' htmlFor="">Choose a category</label>
                <select className=' p-2 rounded-xl bg-white shadow-md' name="category" id="">
                    <option value="general">General</option>
                    <option value="web-design">Web Design</option>
                    <option value="development">Development</option>
                    <option value="databases">Databases</option>
                    <option value="seo">Search Engines</option>
                    <option value="marketing">Marketing</option>
                </select>
            </div>
            <textarea 
              name="desc" 
              placeholder=' A Short Description' 
              className=' p-4 rounded-xl bg-white shadow-md'
            />
            <ReactQuill theme='snow' className=' flex-1 rounded-xl bg-white shadow-md' value={value} onChange={setValue} />
            <button disabled={mutation.isPending} className=' bg-blue-800 p-2 text-white font-medium rounded-xl w-36 mt-4 
            disabled:bg-blue-400 disabled:cursor-not-allowed'>
              {mutation.isPending ? "Loading..." : "Send"}
            </button>
            {mutation.isError && <span> {mutation.error.message} </span>}
        </form>
    </div>
  )
}

export default Write