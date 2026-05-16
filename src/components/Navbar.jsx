function Navbar() {
  return (
    <header className="navbar">
      <div className="logo-area">
        {/* COLOQUE SUA LOGO AQUI */}
        <div className="logo-placeholder"></div>

        <h1>SKULL TEC</h1>
      </div>

      <nav>
        <ul className="nav-links">
          <li>Início</li>
          <li>Soluções</li>
          <li>Parcerias</li>
          <li>Agendar reunião</li>
        </ul>
      </nav>

    </header>
  )
}

export default Navbar