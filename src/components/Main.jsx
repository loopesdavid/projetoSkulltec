function Main() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="left-text">
          <h2>
            Sua<br />
            aliada<br />
            tech
          </h2>
        </div>

        <div className="hero-image">
          {/* IMAGEM PRINCIPAL AQUI */}
          <img src="/assets/logosemtexto.png" alt="Skull Tec" className="logo-image"/>
        </div>

        <div className="right-text">
          <h2>
            do agora<br />
            ao futuro
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Main