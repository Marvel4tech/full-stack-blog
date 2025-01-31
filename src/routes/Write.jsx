import { useUser } from '@clerk/clerk-react'
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from 'react-quill-new';

const Write = () => {
  const { isLoaded, isSignedIn } = useUser()

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  if (isLoaded && !isSignedIn) {
    return <div>Please sign in to write a post.</div>
  }

  return (
    <div className=' h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
        <h1 className=' text-xl font-light'>Create a New Post</h1>
        <form className=' flex flex-col gap-6 flex-1 mb-6'>
            <button className='w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white'>Add a Cover Image</button>
            <input 
              type="text" 
              placeholder=' Title'
              className=' font-semibold text-4xl bg-transparent outline-none'
            />
            <div className=' flex items-center gap-4'>
                <label className=' text-sm' htmlFor="">Choose a category</label>
                <select className=' p-2 rounded-xl bg-white shadow-md' name="cat" id="">
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
            <ReactQuill theme='snow' className=' flex-1 rounded-xl bg-white shadow-md' />
            <button className=' bg-blue-800 p-2 text-white font-medium rounded-xl w-36 mt-4'>
              Send
            </button>
        </form>
    </div>
  )
}

export default Write