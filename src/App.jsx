import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import Partners from './pages/Partners'

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/solucoes"
          element={<Solutions />}
        />

        <Route
          path="/parcerias"
          element={<Partners />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App