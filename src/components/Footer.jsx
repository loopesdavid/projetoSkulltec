import logosemtexto from '../assets/logosemtexto.png'

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-left">
        <div className="footer-logo-placeholder">
          <img src={logosemtexto} alt="Skull Tec" className="logo-image"/>
        </div>

        <div>
          <h2>SKULL TEC</h2>

          <p>
            Na mente da caveira,
            nasce o código.
          </p>
        </div>
      </div>

      <div className="footer-center">
        <p>Soluções</p>
        <p>Parcerias</p>
        <p>Agendar Reunião via WhatsApp</p>
      </div>

      <div className="footer-right">
        
      </div>

      <div className="footer-copy">
        © Skull Tec — Todos os direitos reservados
      </div>

    </footer>
  )
}

export default Footer