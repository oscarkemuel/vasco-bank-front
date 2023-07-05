import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Financing = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [propertyValue, setPropertyValue] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);

  const handleLoanRequest = () => {
    // Verificar se o valor do empréstimo é válido
    if (loanAmount <= 0) {
      alert('Informe um valor de empréstimo válido.');
      return;
    }

    // Verificar se o valor do imóvel é válido
    if (propertyValue <= 0) {
      alert('Informe um valor de imóvel válido.');
      return;
    }

    // Verificar se o prazo do empréstimo é válido
    if (loanTerm <= 0) {
      alert('Informe um prazo de empréstimo válido.');
      return;
    }

    // Realizar o processamento da solicitação de empréstimo ou financiamento
    // Aqui você pode adicionar a lógica de acordo com os requisitos do seu sistema
    // Por exemplo, realizar cálculos, fazer requisições a uma API, etc.

    // Exemplo de como usar os valores dos campos
    console.log('Loan Amount:', loanAmount);
    console.log('Property Value:', propertyValue);
    console.log('Loan Term:', loanTerm);

    // Limpar os campos após a solicitação ser processada
    setLoanAmount(0);
    setPropertyValue(0);
    setLoanTerm(0);

    // Exibir uma mensagem de sucesso ou redirecionar para outra página
    alert('Solicitação de empréstimo enviada com sucesso!');
  };

  return (
    // <div>
    //   <h1>Dashboard</h1>
    //   <Link to="/investments">Investimentos</Link><br/>
    //   <Link to="/financing">Financiamento</Link><br/>
    //   <Link to="/insurance">Seguro</Link><br/>
    //   <Link to="/creditCard">Cartão de Crédito</Link><br/>

    //   <Link to="/current-account">Conta</Link><br />

    //   <button onClick={handleLogout}>Logout</button>

    // </div>
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Dashboard - NiceAdmin Bootstrap Template</title>
      <meta content="" name="description" />
      <meta content="" name="keywords" />
      {/* Favicons */}
      <link href="../src/icon.png" rel="icon" />
      <link href="../src/icon.png" rel="apple-touch-icon" />
      {/* Google Fonts */}
      <link href="https://fonts.gstatic.com" rel="preconnect" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet"
      />
      {/* Vendor CSS Files */}
      <link
        href="assets/vendor/bootstrap/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
        rel="stylesheet"
      />
      <link
        href="assets/vendor/boxicons/css/boxicons.min.css"
        rel="stylesheet"
      />
      <link href="assets/vendor/quill/quill.snow.css" rel="stylesheet" />
      <link href="assets/vendor/quill/quill.bubble.css" rel="stylesheet" />
      <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
      <link href="assets/vendor/simple-datatables/style.css" rel="stylesheet" />
      {/* Template Main CSS File */}
      <link href="../index.css" rel="stylesheet" />
      <link href="assets/css/style.css" rel="stylesheet" />
      {/* ======= Header ======= */}
      <header style={{ top: 0, position: 'sticky', zIndex: 50 }}>
        <nav className="navbar navbar-expand-lg navbar-dark navbarcolor">
          <div className="container-fluid">
            <Link className="navbar-brand toggle-sidebar-btn" to="/">
              <img src="src/assets/images/logo4.png" alt="" />
            </Link>
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
                    <img src="../src/avatar.png" id="navbarAvatar" alt="" />
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
                      <a className="dropdown-item" href="../index.html">
                        Sair <i className="bi bi-box-arrow-left" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* End Header */}
      {/* ======= Sidebar ======= */}
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link className="nav-link " to="/dashboard">
              <i className="bi bi-grid" />
              <span>Visão Geral</span>
            </Link>
          </li>
          {/* End Dashboard Nav */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#tables-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-person-lines-fill" />
              <span>Conta Corrente</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="tables-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="tables-general.html">
                  <i className="bi bi-circle" />
                  <span>Exemplo</span>
                </a>
              </li>
              <li>
                <a href="tables-data.html">
                  <i className="bi bi-circle" />
                  <span>Exemplo</span>
                </a>
              </li>
            </ul>
          </li>

          {/* End Tables Nav */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#components-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-menu-button-wide" />
              <span>Components</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="components-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="components-alerts.html">
                  <i className="bi bi-circle" />
                  <span>Exemplo</span>
                </a>
              </li>
              <li>
                <a href="components-accordion.html">
                  <i className="bi bi-circle" />
                  <span>Exemplo</span>
                </a>
              </li>
              <li>
                <a href="components-badges.html">
                  <i className="bi bi-circle" />
                  <span>Exemplo</span>
                </a>
              </li>
              <li>
                <a href="components-breadcrumbs.html">
                  <i className="bi bi-circle" />
                  <span>Exemplo</span>
                </a>
              </li>
              <a href="components-buttons.html">
                <i className="bi bi-circle" />
                <span>Exemplo</span>
              </a>
            </ul>
          </li>
          {/* End Components Nav */}
          <li className="nav-item">
            <Link
              className="nav-link collapsed"
              data-bs-target="#forms-nav"
              data-bs-toggle="collapse"
              to="/creditCard"
            >
              <i className="bi bi-credit-card" />
              <span>Meus Cartões</span>
            </Link>
          </li>
          {/* End Forms Nav */}
          <li className="nav-item">
            <Link
              className="nav-link collapsed"
              data-bs-target="#charts-nav"
              data-bs-toggle="collapse"
              to="/insurance"
            >
              <i className="bi bi-shield-check" />
              <span>Seguros</span>
            </Link>
          </li>
          {/* End Charts Nav */}
          {/* End Forms Nav */}
          <li className="nav-item">
            <Link
              className="nav-link collapsed"
              data-bs-target="#charts-nav"
              data-bs-toggle="collapse"
              to="/financing"
            >
              <i className="bi bi-shield-check" />
              <span>Financiamentos</span>
            </Link>
          </li>
          {/* End Charts Nav */}
          <li className="nav-item">
            <Link
              className="nav-link collapsed"
              data-bs-target="#icons-nav"
              data-bs-toggle="collapse"
              to="/investments"
            >
              <i className="bi bi-gem" />
              <span>Investimentos</span>
              <i className="bi bi-chevron-down ms-auto" />
            </Link>
            <ul
              id="icons-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="icons-bootstrap.html">
                  <i className="bi bi-circle" />
                  <span>Exemplo</span>
                </a>
              </li>
              <li>
                <a href="icons-remix.html">
                  <i className="bi bi-circle" />
                  <span>Exemplo</span>
                </a>
              </li>
              <li>
                <a href="icons-boxicons.html">
                  <i className="bi bi-circle" />
                  <span>Exemplo</span>
                </a>
              </li>
            </ul>
          </li>
          {/* End Icons Nav */}
          <li className="nav-heading">Pages</li>
          <li className="nav-item">
            <Link
              className="nav-link collapsed"
              data-bs-target="#charts-nav"
              data-bs-toggle="collapse"
              to="/faq"
            >
              <i className="bi bi-question-circle" />
              <span>F.A.Q</span>
            </Link>
          </li>
          {/* End F.A.Q Page Nav */}
          <li className="nav-item">
            <Link
              className="nav-link collapsed"
              data-bs-target="#charts-nav"
              data-bs-toggle="collapse"
              to="/fale"
            >
              <i className="bi bi-envelope" />
              <span>Fale Conosco</span>
            </Link>
          </li>
        </ul>
      </aside>
      {/* End Sidebar*/}
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Financiamento</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Início</a>
              </li>
              <li className="breadcrumb-item active">Financiamento</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}
        <section className="section dashboard">
          <div className="row">
            {/* Left side columns */}
            <div className="col-lg-8">
              <div className="row">
                {/* Sales Card */}
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card sales-card">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Today
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        Parcela<span> | Em aberto</span>
                      </h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-cart" />
                        </div>
                        <div className="ps-3">
                          <h6>R$659</h6>
                          <span className="text-success small pt-1 fw-bold">
                            23/60
                          </span>{' '}
                          <span className="text-muted small pt-2 ps-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Sales Card */}
                {/* Revenue Card */}
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card revenue-card">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Today
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Saldo devedor</h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-currency-dollar" />
                        </div>
                        <div className="ps-3">
                          <h6>R$21,648</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Revenue Card */}
                {/* Customers Card */}
                <div className="col-12">
                  <div className="card top-selling overflow-auto">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Today
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body pb-0">
                      <h5 className="card-title">
                        Historico<span></span>
                      </h5>
                      <table className="table table-borderless">
                        <thead>
                          <tr>
                            <th scope="col">Descrição</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Data</th>
                            <th scope="col">Situação</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a href="#" className="text-primary fw-bold">
                                carrin do ano
                              </a>
                            </td>
                            <td>R$659</td>
                            <td className="fw-bold">11/05</td>
                            <td>em aberto</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#" className="text-primary fw-bold">
                                carrin do ano
                              </a>
                            </td>
                            <td>R$659</td>
                            <td className="fw-bold">11/04</td>
                            <td>pago</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#" className="text-primary fw-bold">
                                carrin do ano
                              </a>
                            </td>
                            <td>R$659</td>
                            <td className="fw-bold">11/03</td>
                            <td>pago</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#" className="text-primary fw-bold">
                                carrin do ano
                              </a>
                            </td>
                            <td>R$659</td>
                            <td className="fw-bold">11/02</td>
                            <td>pago</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#" className="text-primary fw-bold">
                                carrin do ano
                              </a>
                            </td>
                            <td>R$659</td>
                            <td className="fw-bold">11/01</td>
                            <td>pago</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* End Top Selling */}
              </div>
            </div>
            {/* End Left side columns */}
            {/* Right side columns */}
            <div className="col-lg-4">
              {/* Recent Activity */}
              <div className="card">
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Today
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Atividades Recentes<span> | Hoje</span>
                  </h5>
                  <div className="activity">
                    <div className="activity-item d-flex">
                      <div className="activite-label">32 min</div>
                      <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
                      <div className="activity-content">
                        Quia quae rerum{' '}
                        <a href="#" className="fw-bold text-dark">
                          explicabo officiis
                        </a>{' '}
                        beatae
                      </div>
                    </div>
                    {/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div className="activite-label">56 min</div>
                      <i className="bi bi-circle-fill activity-badge text-danger align-self-start" />
                      <div className="activity-content">
                        Voluptatem blanditiis blanditiis eveniet
                      </div>
                    </div>
                    {/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div className="activite-label">2 h</div>
                      <i className="bi bi-circle-fill activity-badge text-primary align-self-start" />
                      <div className="activity-content">
                        Voluptates corrupti molestias voluptatem
                      </div>
                    </div>
                    {/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div className="activite-label">1 dia</div>
                      <i className="bi bi-circle-fill activity-badge text-info align-self-start" />
                      <div className="activity-content">
                        Tempore autem saepe{' '}
                        <a href="#" className="fw-bold text-dark">
                          occaecati voluptatem
                        </a>{' '}
                        tempore
                      </div>
                    </div>
                    {/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div className="activite-label">2 dias</div>
                      <i className="bi bi-circle-fill activity-badge text-warning align-self-start" />
                      <div className="activity-content">
                        Est sit eum reiciendis exercitationem
                      </div>
                    </div>
                    {/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div className="activite-label">4 sem</div>
                      <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
                      <div className="activity-content">
                        Dicta dolorem harum nulla eius. Ut quidem quidem sit
                        quas
                      </div>
                    </div>
                    {/* End activity item*/}
                  </div>
                </div>
              </div>
              {/* End Recent Activity */}
              {/* News & Updates Traffic */}
              <div className="card">
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Today
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body pb-0">
                  <h5 className="card-title">Notícias e Atualizações</h5>
                  <div className="news">
                    <div className="post-item clearfix">
                      <img src="assets/img/news-1.jpg" alt="" />
                      <h4>
                        <a href="#">Nihil blanditiis at in nihil autem</a>
                      </h4>
                      <p>
                        Sit recusandae non aspernatur laboriosam. Quia enim
                        eligendi sed ut harum...
                      </p>
                    </div>
                    <div className="post-item clearfix">
                      <img src="assets/img/news-2.jpg" alt="" />
                      <h4>
                        <a href="#">Quidem autem et impedit</a>
                      </h4>
                      <p>
                        Illo nemo neque maiores vitae officiis cum eum turos
                        elan dries werona nande...
                      </p>
                    </div>
                    <div className="post-item clearfix">
                      <img src="assets/img/news-3.jpg" alt="" />
                      <h4>
                        <a href="#">
                          Id quia et et ut maxime similique occaecati ut
                        </a>
                      </h4>
                      <p>
                        Fugiat voluptas vero eaque accusantium eos. Consequuntur
                        sed ipsam et totam...
                      </p>
                    </div>
                    <div className="post-item clearfix">
                      <img src="assets/img/news-4.jpg" alt="" />
                      <h4>
                        <a href="#">Laborum corporis quo dara net para</a>
                      </h4>
                      <p>
                        Qui enim quia optio. Eligendi aut asperiores enim
                        repellendusvel rerum cuder...
                      </p>
                    </div>
                    <div className="post-item clearfix">
                      <img src="assets/img/news-5.jpg" alt="" />
                      <h4>
                        <a href="#">Et dolores corrupti quae illo quod dolor</a>
                      </h4>
                      <p>
                        Odit ut eveniet modi reiciendis. Atque cupiditate libero
                        beatae dignissimos eius...
                      </p>
                    </div>
                  </div>
                  {/* End sidebar recent posts*/}
                </div>
              </div>
              {/* End News & Updates */}
            </div>
            {/* End Right side columns */}
          </div>
        </section>
      </main>
      {/* End #main */}
      {/* ======= Footer ======= */}
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
                    777
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    777
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    777
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    777
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
                    777
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    777
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    777
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    777
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
                  <i className="fas fa-phone me-3" /> 0800 777 7777
                </p>
                <p>
                  <i className="fas fa-print me-3" /> 0800 777 7777
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
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
        >
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            VSCO BANK
          </a>
        </div>
      </footer>
      {/* End Footer */}
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
      {/* Vendor JS Files */}
      {/* Template Main JS File */}
    </>
  );
};
