import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './shared.css'
import './App.css'
import App from './App.jsx'
import Medium from './Medium.jsx'
import Hard from './Hard.jsx'
import HardJr from './HardJr.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/medium" element={<Medium />} />
        <Route path="/hard" element={<Hard />} />
        <Route path="/hard/longterm" element={<HardJr />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)