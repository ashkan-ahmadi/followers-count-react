import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Header from './components/Header'

// pages
import Home from './pages/Home'
import Create from './pages/Create'
import Update from './pages/Update'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
