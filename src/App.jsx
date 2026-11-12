import './App.css'

function App() {

      const url = import.meta.env.VITE_API_URL;
  return (
      <>
        <h1>{import.meta.env.VITE_APP_NAME}</h1>
        <h2>{url}</h2>
        <button className="btn btn-primary">Kliknij</button>
        <div className="container">
          <header className="text-center">
              <h1 className="text-bg-dark">Nazwa</h1>
            <p className="lead text-muted">
              Witamy na naszej stronie internetowej. Znajdziesz tutaj najważniejsze informacje o nas i naszej ofercie.
            </p>
          </header>

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand" href="#">
                Moja Strona
              </a>

              <div className="navbar-nav">
                <a className="nav-link" href="#">Start</a>
                <a className="nav-link" href="#">O nas</a>
                <a className="nav-link" href="#">Oferta</a>
                <a className="nav-link" href="#">Kontakt</a>
              </div>
            </div>
          </nav>

          <div className="container text-center mt-4">
            <button className="btn btn-primary">
              Kliknij
            </button>
          </div>
          <section>
            <header className="py-5 text-center">krotki tekst</header>
            <button className="btn btn-primary">przycisk</button>
          </section>
        </div>
      </>
    )
}

export default App
