import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './routes/HomePage.jsx'
import PostLists from './routes/PostLists.jsx'
import Write from './routes/Write.jsx'
import LoginPage from './routes/LoginPage.jsx'
import Register from './routes/Register.jsx'
import SinglePostPage from './routes/SinglePostPage.jsx'
import MainLayouts from './layouts/MainLayouts.jsx'
import { ClerkProvider } from '@clerk/clerk-react';

// Import your Publishable Key
const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

console.log("Clerk Publishable Key:", publishableKey);

if (!publishableKey) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/posts",
        element: <PostLists />
      },
      {
        path: "/:slug",
        element: <SinglePostPage />
      },
      {
        path: "/write",
        element: <Write />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/register",
        element: <Register />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={publishableKey}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
