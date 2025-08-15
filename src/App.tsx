import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'

import Home from './routes/home/home'
import SearchPage from './routes/search/searchPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/search" element={<SearchPage/>}/>

        {/* redirect to home when user types an invalid path */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
