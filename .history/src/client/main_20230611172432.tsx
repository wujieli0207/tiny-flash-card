import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

const APP = () => {
  return <RouterProvider />
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootContainer = document.getElementById('root')!

createRoot(rootContainer).render(<APP />)
