import { useAuth, useClerk } from '@clerk/clerk-react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const PostMenuAction = ({ post }) => {
  const { user } = useClerk()
  const { getToken } = useAuth()
  const navigate = useNavigate()

  const { isPending, error, data: savedPosts } = useQuery({
    queryKey: ["savedPosts"],
    queryFn: async () => {
      const token = await getToken()
      return axios.get(`${import.meta.env.VITE_API_URL}/users/saved`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    }
  })

  const isAdmin = user?.publicMetadata?.role || false //Role Validation

  const isSaved = savedPosts?.data?.some((p) => p === post._id) || false;

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken()
      return axios.delete(`${import.meta.env.VITE_API_URL}/posts/${post._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      toast.success("Post deleted successfully")
      navigate("/")
    },
    onError: (error) => {
      toast.error(error.response.data)
      console.error("Error deleting post:", error)
    }
  })

  const handleDelete = () => {
    deleteMutation.mutate()
  }


  const queryClient = useQueryClient()

  const saveMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken()
      return axios.patch(`${import.meta.env.VITE_API_URL}/users/save`, 
        {
          postId: post._id
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [savedPosts] })
    },
    onError: (error) => {
      toast.error(error.response.data)
      console.error("Error deleting post:", error)
    }
  })

  const featureMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken()
      return axios.patch(`${import.meta.env.VITE_API_URL}/posts/feature`, 
        {
          postId: post._id
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["post", post.slug] })
    },
    onError: (error) => {
      toast.error(error.response.data)
      console.error("Error deleting post:", error)
    }
  })

  const handlefeature = () => {
    featureMutation.mutate()
  }

  const handleSave = () => {
    console.log("Save button clicked")
    if (!user) {
      return navigate("/login")
    }
    saveMutation.mutate()
  }

  return (
    <div>
        <h1 className=' text-sm mt-8 mb-4 font-medium'>Actions</h1>
        { isPending ? "Loading..." : error ? "failed to fetch saved post" : <div onClick={handleSave} className=' flex items-center 
        gap-2 py-2 text-sm cursor-pointer'>
            <span>✅</span>
            <span className={saveMutation.isPending ? isSaved ? "" : "border border-green-600 py-1 px-3" : `${isSaved ? "border border-green-600 py-1 px-3" : ""}`} aria-label={isSaved ? "Saved" : "Not Saved"}>
              Save this Post
            </span>
            {saveMutation.isPending && <span className=' text-sm'>(in progress)</span>}
        </div>}
        { isAdmin && (
          <div className=' flex items-center gap-2 py-2 text-sm cursor-pointer' onClick={handlefeature}>
            <span>⭐️</span>
            <span>
              Feature
            </span>
            {featureMutation.isPending && <span className=' text-sm'>(in progress)</span>}
          </div>
        )}
        {user && (post.user.username === user.username || isAdmin) && <div onClick={handleDelete} className=' flex items-center gap-2 py-2 text-sm 
        cursor-pointer'>
            <span>❌</span>
            <span>Delete this Post</span>
            {deleteMutation.isPending && <span className=' text-sm'>(in progress)</span>}
        </div>}
    </div>
  )
}

export default PostMenuAction