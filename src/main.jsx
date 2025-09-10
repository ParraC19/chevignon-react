import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EcommerceLayout from './components/Carrito'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EcommerceLayout />
  </StrictMode>,
)

