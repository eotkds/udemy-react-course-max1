import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import App from './App.jsx'
import NewPost from './components/NewPost.jsx';
import RootLayout from './routes/RootLayout.jsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: App,
      },
      {
        path: "/create-post",
        Component: NewPost,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
