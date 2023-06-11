import { RouterProvider } from 'react-router-dom'
import { routes } from './route'

const APP = () => {
  return <RouterProvider router={routes} />
}

export default APP
