import './index.css'
import App from './App.tsx'
import Watch from './pages/Watch/Watch.tsx'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/:id/:episode' element={<Watch/>}/>
        </Routes>
    </BrowserRouter>
)
