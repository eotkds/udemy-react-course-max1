import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";


import NewPost, { newPostAction } from './routes/NewPost.jsx';
import RootLayout from './routes/RootLayout.jsx';
import Posts, { postsLoader } from './routes/Posts.jsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        loader: postsLoader,
        Component: Posts,
        children: [
          {
            path: "/create-post",
            Component: NewPost,
            action: newPostAction
          }
        ],
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
