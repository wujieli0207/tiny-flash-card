import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootContainer = document.getElementById('root')!

createRoot(rootContainer).render(<APP />)
