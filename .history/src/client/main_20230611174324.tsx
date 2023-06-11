import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './route'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootContainer = document.getElementById('root')!

const APP = () => {
  return <RouterProvider router={routes} />
}
console.log('APP: ', APP)

createRoot(rootContainer).render(<APP />)
