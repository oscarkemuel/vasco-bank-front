import { Link } from "react-router-dom";
import React from "react";

export function Home() {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="./src/icon.png" type="image/x-icon" />
        <link rel="stylesheet" href="./index.css" />
        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <title>VSCO</title>
      </head>
      <main>
        <nav className="navbar navbar-expand-lg navbar-dark navbarcolor" style={{ backgroundColor: "#363636" }}>
          <div className="container-fluid">
            <a href="#" className="navbar-brand">
              <img src="./src/logo4.png" alt="" />
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse7"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse7">
              <div className="navbar-nav">
                <a href="#" className="nav-item nav-link" />
              </div>
              <form className="d-flex ms-auto">
                <input
                  type="text"
                  className="form-control me-sm-2"
                  placeholder="Busque..."
                />
                <button type="submit" className="btn btn-outline-light">
                  <i className="bi bi-search" />
                </button>
              </form>
              <div className="profile">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="./src/avatar.png" id="navbarAvatar" alt="" />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Sobre
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Preferências
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sair <i className="bi bi-box-arrow-left" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <section>
          <div className="faixaprincipal trapzeio" style={{ 
            backgroundColor: "#363636",
            marginBottom: "45px !important",
           }}>
            <div className="container row flex-lg-row-reverse align-items-center g-5 py-5 d-flex justify-content-center">
              <div
                className="col-10 col-sm-8 col-lg-6"
                style={{ marginTop: "0px !important" }}
              >
                <img
                  src="./src/logo3.png"
                  className="d-block mx-lg-auto img-fluid"
                  alt="Bootstrap Themes"
                  width={700}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6" style={{ marginTop: "0px !important", color: "#f1f1f1" }}>
                <h1 className="display-5 fw-bold lh-1 mb-3" style={{ color: "#f1f1f1" }}>
                  Bem vindo ao <span style={{ color: "#d23a3a" }}>VSCO</span>!
                  Seu mais novo banco digital.
                </h1>
                <p className="lead">
                  Simplificando suas finanças, com inovação. Contas, pagamentos
                  e investimentos sem sair de casa.
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button
                    type="button"
                    className="btn btn-light btn-lg px-4"
                    style={{
                      zIndex: 11,
                      backgroundColor: "#d23a3a",
                      color: "white",
                    }}
                  >
                    Register
                  </button>
                  <button
                    type="button"
                    className="btn btn-light btn-lg px-4"
                    style={{ zIndex: 11 }}
                  >
                    <Link to="/login">Login</Link>
                  </button>
                </div>
              </div>
            </div>
            <canvas />
          </div>
          <div className="container px-4" id="hanging-icons">
            <h2 className="pb-2 border-bottom">Features</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
              <div className="col d-flex align-items-start">
                <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                  <i className="bi bi-toggles2" />
                </div>
                <div>
                  <h2>Amigável</h2>
                  <p>
                    desenvolvido com foco na experiência do usuário. Sua
                    interface intuitiva e simplificada permite que qualquer
                    pessoa possa realizar operações financeiras com facilidade.
                    Com recursos acessíveis e um design amigável, nosso
                    aplicativo torna a gestão financeira mais simples e
                    descomplicada.
                  </p>
                  <a href="#" className="btn btn-danger">
                    Saiba mais
                  </a>
                </div>
              </div>
              <div className="col d-flex align-items-start">
                <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                  <i className="bi bi-speedometer2" />
                </div>
                <div>
                  <h2>Ágil</h2>
                  <p>
                    Priorizamos a agilidade em todas as nossas operações
                    financeiras. Tudo aqui é projetado para tornar as transações
                    rápidas e eficientes, de transferências à investimentos,
                    nossos processos são simplificados, com interfaces
                    intuitivas que permitem aos clientes realizar suas operações
                    com facilidade e rapidez.
                  </p>
                  <a href="#" className="btn btn-danger">
                    Saiba mais
                  </a>
                </div>
              </div>
              <div className="col d-flex align-items-start">
                <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                  <i className="bi bi-shield-lock-fill" />
                </div>
                <div>
                  <h2>Seguro</h2>
                  <p>
                    Aqui no VSCO BANK, segurança é prioridade absoluta.
                    Utilizamos tecnologias avançadas de criptografia e
                    autenticação de dois fatores para garantir a proteção dos
                    dados e transações dos nossos clientes. Além disso, contamos
                    com um sistema de monitoramento constante para identificar e
                    responder prontamente a qualquer atividade suspeita.
                  </p>
                  <a href="#" className="btn btn-danger">
                    Saiba mais
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="text-center text-lg-start bg-light text-muted border-top mt-5">
        {/* Links  */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />
                  <img src="./src/icon.png" id="navbarAvatar" alt="" />
                </h6>
                <p></p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Produtos</h6>
                <p>
                  <a href="#!" className="text-reset">
                    xxxxx
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    xxxxx
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    xxxx
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    xxxxxx
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    xxx
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    xxxxx
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    xxxxxx
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    xxxxxx
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contato</h6>
                <p>
                  <i className="fas fa-home me-3" /> Natal-RN, Brasil
                </p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  info@vsco.com
                </p>
                <p>
                  <i className="fas fa-phone me-3" /> 84 999566845
                </p>
                <p>
                  <i className="fas fa-print me-3" /> 84 999566845
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Copyright */}
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            VSCO BANK
          </a>
        </div>
      </footer>
      {/* Bootstrap JS */}
    </>
  );
}
