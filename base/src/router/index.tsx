import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = [
  { path: '/', element: <div>page index</div> },
  { path: '/editor', element: <div>page editor</div> }
]

const router = createBrowserRouter(routes)

export default () => <RouterProvider router={router} />
