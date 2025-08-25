import './index.css'
import App from './App.tsx'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Verify from './verify/Verify.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/:token' element={<Verify />} />
        </Routes>
    </BrowserRouter>
)
