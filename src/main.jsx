import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import Page1 from './Page1.jsx'
import './index.css'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <MainPage /> */}

    <Page1 />
   
  </StrictMode>,
)
