import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App3 from './App3.jsx'
import { BrowserRouter } from 'react-router-dom'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App3 />
//   </StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/test/my-react-app/">
    <App />
  </BrowserRouter>
)
