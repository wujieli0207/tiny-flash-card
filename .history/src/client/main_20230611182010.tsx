import { createRoot } from 'react-dom/client'
import App from './App'

import './styles/index.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootContainer = document.getElementById('root')!

createRoot(rootContainer).render(<App />)

// import { createRoot } from 'react-dom/client'
// import App from './App'

// // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
// const rootContainer = document.getElementById('root')!

// createRoot(rootContainer).render(<App />)
