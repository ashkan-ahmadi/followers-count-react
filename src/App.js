import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Create from './pages/Create'
import Update from './pages/Update'
import Header from './components/Header'

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
