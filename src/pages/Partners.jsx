import navegalogo from '../assets/navegalogo.png'
import fiestalogo from '../assets/fiestalogo.png'

function Partners() {
  return (
    <section className="page-container">

      <h1>Parcerias</h1>

      <p>
        Trabalhamos lado a lado com empresas
        que compartilham nossa visão de inovação.
      </p>

      <div className="partner-card">

        <div className="partner-image">
          <img src={navegalogo} alt="Navega logo" className="partner-logo"  />
        </div>

        <div>
          <h2>NavegaMundo</h2>

          <p>
            Realizamos um projeto conjunto com a empresa parceira Navega mundo,
            desenvolvendo soluções inovadoras para o mercado.
          </p>
        </div>

      </div>

      <div className="partner-card">

        <div className="partner-image">
          <img src={fiestalogo} alt="Fiesta logo" className="partner-logo" />
        </div>

        <div>
          <h2>Fiesta Mexicana</h2>

          <p>
            O restaurante mexicano Fiesta é um dos nossos novos parceiros,
            com quem desenvolvemos sistemas visionários atualmente.
          </p>
        </div>

      <div className="partner-card">

        <div className="partner-image">
          <img src={fiestalogo} alt="Fiesta logo" className="partner-logo" />
        </div>

        <div>
          <h2>Consultoria Financeira Crescer</h2>

          <p>
            Mensagem da parceria
          </p>
        </div>
        
      </div>

      </div>
    </section>
  )
}

export default Partners