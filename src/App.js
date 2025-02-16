import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Create from './pages/Create'
import Update from './pages/Update'

function App() {
  return (
    <BrowserRouter>
      <header className="container-fluid py-4 bg-light ">
        <div className="container">
          <nav className="navbar text-center ">
            <a className="navbar-brand">Supabase Smoothies</a>
            <div>
              <Link to="/">Home</Link>
              <Link to="/create">
                <a className="btn btn-primary">Create New Smoothie</a>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
