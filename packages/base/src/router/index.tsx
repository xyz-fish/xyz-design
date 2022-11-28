import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
  { path: '/', element: <div>page index</div> },
  { path: '/editor', element: <div>page editor</div> }
]

const router = createBrowserRouter(routes)

export default () => <RouterProvider router={router} />
