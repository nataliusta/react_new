import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Posts, { loader as postsLoader } from './components/routes/Posts';
import './index.css';
import NewPost from './components/routes/NewPost';
import RootLayout from './components/routes/RootLayout';

const router = createBrowserRouter([ // array of all routers you have
  { path: '/', element: <RootLayout />, children: [
    { 
      path: '/', 
      element: <Posts />, 
      loader: postsLoader,
      children: [{ path: '/create-post', element: <NewPost /> }],
    }, // main domain
  ]},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
