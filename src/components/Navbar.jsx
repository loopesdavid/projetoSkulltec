import { Link } from 'react-router-dom'
import logosemtexto from '../assets/logosemtexto.png'

function Navbar() {

  const scrollToServices = () => {
    const section = document.getElementById('services')

    section?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <header className="navbar">

      <div className="logo-area">
        <img 
          src={logosemtexto} 
          alt="Skull Tec" 
          className="logo-image"
        />

        <h1>SKULL TEC</h1>
      </div>

      <nav>
        <ul className="nav-links">

          <li>
            <Link to="/">Início</Link>
          </li>

          <li onClick={scrollToServices}>
            Soluções
          </li>

          <li>
            <Link to="/parcerias">Parcerias</Link>
          </li>

        </ul>
      </nav>

    </header>
  )
}

export default Navbar