import {Routes, Route, Link} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer'

import Home from './pages/Home'
import Solutions from './pages/Solutions'
import Partners from './pages/Partners'
function App(){
  return(
    <div>
      <Navbar/>

      <hr/>
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

      <Footer/>
    </div>
  )
}

export default App