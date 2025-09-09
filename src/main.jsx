import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Carrito from './components/Carrito'
import LoginRegistro from './pages/LoginRegistro'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginRegistro/>
  </StrictMode>,
)

