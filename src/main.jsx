import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from '.react-router-dom';
import App from './App';
import './index.css';

const router = createBrowserRouter([ // array of all routers you have
  { path: '/', element: <App /> }, // main domain

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
