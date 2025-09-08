import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Input from './components/input'
import './global.css'
import Button from './components/Button'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Input type={"text"} placeholder={"test"} label={"test"}/>
    <Button text={"test"}/>
  </StrictMode>,
)
