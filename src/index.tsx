import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Posts from './Page/Posts/Posts';
import CreatePosts from './Page/CreatePost/CreatePost';
import FavoritePosts from './Page/FavoritePosts/FavoritePosts';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFoundBlock from './components/NotFound/NotFoundBlock';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundBlock />,
    children: [
      {
        path: '/',
        element: <Posts />,
      },
      {
        path: '/create',
        element: <CreatePosts />,
      },
      {
        path: '/favorite',
        element: <FavoritePosts />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router} />
)
