import { useAuth, useUser } from '@clerk/clerk-react'
import Comment from './Comment'
import axios from 'axios'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

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
  const { user } = useUser()
  const { getToken } = useAuth()

  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  })

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (newComment) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/comments/${postId}`, newComment, {
        headers:{
          Authorization: `Bearer ${token}`,
        }
      });
    },
    onSuccess: (res) => {
      console.log(res); // Log the response to check the structure
      queryClient.invalidateQueries({ queryKey: ["comments", postId] })
    },
    onError: (error) => {
      console.error("API Error:", error);
      toast.error(error.response.data)
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const data = {
      desc: formData.get("desc")
    }

    console.log("Form data:", data);

    mutation.mutate(data)
  }

  return (
    <div className=' flex flex-col gap-8 lg:w-3/5 mb-12'>
        <h1 className=' text-xl text-gray-500 underline'>Comments</h1>
        <form onSubmit={handleSubmit} className=' flex items-center justify-between w-full gap-8'>
            <textarea 
                name='desc'
                placeholder=' Write a comment...'
                className=' w-full rounded-xl p-4'
            />
            <button className=' bg-blue-800 px-4 py-3 text-white font-medium rounded-xl'>
                Send
            </button>
        </form>
        {isPending 
          ? "Loading..." 
          : error ? "Error loading comments!" 
          : 
        <>
          {
            mutation.isPending && (
              <Comment 
                comment={{
                  desc: `${mutation.variables.desc} (sending...)`,
                  createdAt: new Date(),
                  user: {
                    img: user.imageUrl,
                    username: user.username,
                  }
                }}
              />
            )
          }

          {data.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </>

        }
    </div>
  )
}

export default Comments