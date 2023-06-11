import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

const APP = () => {
  return <RouterProvider />
}

const rootContainer = document.getElementById('root')!

createRoot(rootContainer).render(<APP />)
