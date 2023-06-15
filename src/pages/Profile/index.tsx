import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export function Profile() {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logOut();
  }

  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Dashboard - </title>
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
      <header style={{ top: 0, position: "sticky", zIndex: 50 }}>
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
              {/* logout */}
              <button className="btn btn-danger d-flex ms-auto" onClick={handleLogout}>
                Sair
              </button>
              {/* End logout */}
              <div className="profile">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn"
                    aria-expanded="false"
                    onClick={() => navigate('/profile')}
                  >
                    <img src="../src/assets/images/avatar.png" id="navbarAvatar" alt="" />
                  </button>
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
            <Link className="nav-link collapsed" to="/dashboard">
              <i className="bi bi-grid" />
              <span>Visão geral</span>
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
            <a className="nav-link collapsed" href="pages-faq.html">
              <i className="bi bi-question-circle" />
              <span>F.A.Q</span>
            </a>
          </li>
          {/* End F.A.Q Page Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-contact.html">
              <i className="bi bi-envelope" />
              <span>Fale Conosco</span>
            </a>
          </li>
        </ul>
      </aside>
      {/* End Sidebar*/}
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Meus dados</h1>
        </div>
        {/* End Page Title */}
        <section className="section profile">
      <div className="row">
        <div className="col-xl-4">
          <div className="card">
            <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
              <img
                src="../src/assets/images/avatar.png"
                alt="Perfil"
                className="rounded-circle"
              />
              <h2>Kevin Anderson</h2>
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="card">
            <div className="card-body pt-3">
              {/* Abas com borda */}
              <ul className="nav nav-tabs nav-tabs-bordered">
                <li className="nav-item">
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-overview"
                  >
                    Visão geral
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-edit"
                  >
                    Editar perfil
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-settings"
                  >
                    Configurações
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-change-password"
                  >
                    Alterar senha
                  </button>
                </li>
              </ul>
              <div className="tab-content pt-2">
                <div
                  className="tab-pane fade show active profile-overview"
                  id="profile-overview"
                >
                  <h5 className="card-title">Sobre</h5>
                  <p className="small fst-italic">
                    Sunt est soluta temporibus accusantium neque nam maiores
                    cumque temporibus. Tempora libero non est unde veniam est
                    qui dolor. Ut sunt iure rerum quae quisquam autem eveniet
                    perspiciatis odit. Fuga sequi sed ea saepe at unde.
                  </p>
                  <h5 className="card-title">Detalhes do perfil</h5>
                  <div className="row">
                    <div className="col-lg-3 col-md-4 label ">Nome completo</div>
                    <div className="col-lg-9 col-md-8">Kevin Anderson</div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Empresa</div>
                    <div className="col-lg-9 col-md-8">
                      UFRN
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Cargo</div>
                    <div className="col-lg-9 col-md-

8">Web Designer</div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">País</div>
                    <div className="col-lg-9 col-md-8">BR</div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Endereço</div>
                    <div className="col-lg-9 col-md-8">
                      Natal, Rio Grande do Norte
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Telefone</div>
                    <div className="col-lg-9 col-md-8">
                      +55 84 99999-9999
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">E-mail</div>
                    <div className="col-lg-9 col-md-8">
                      kevin@gmail.com
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade profile-edit pt-3"
                  id="profile-edit"
                >
                  {/* Formulário de edição de perfil */}
                  <form>
                    <div className="row mb-3">
                      <label
                        htmlFor="profileImage"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Imagem de perfil
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <img src="assets/img/profile-img.jpg" alt="Perfil" />
                        <div className="pt-2">
                          <a
                            href="#"
                            className="btn btn-primary btn-sm"
                            title="Carregar nova imagem de perfil"
                          >
                            <i className="bi bi-upload" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-danger btn-sm"
                            title="Remover minha imagem de perfil"
                          >
                            <i className="bi bi-trash" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="fullName"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Nome completo
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="fullName"
                          type="text"
                          className="form-control"
                          id="fullName"
                          defaultValue="Kevin Anderson"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="about"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Sobre
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <textarea
                          name="about"
                          className="form-control"
                          id="about"
                          style={{ height: 100 }}
                          defaultValue={
                            "Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde."
                          }
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="company"
                        className="col-md-4 col-lg-3 col-form-label"
                     

 >
                        Empresa
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="company"
                          type="text"
                          className="form-control"
                          id="company"
                          defaultValue="UFRN"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="Job"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Cargo
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="job"
                          type="text"
                          className="form-control"
                          id="Job"
                          defaultValue="Web Designer"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="Country"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        País
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="country"
                          type="text"
                          className="form-control"
                          id="Country"
                          defaultValue="BR"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="Address"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Endereço
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="address"
                          type="text"
                          className="form-control"
                          id="Address"
                          defaultValue="A108 Adam Street, New York, NY 535022"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="Phone"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Telefone
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="phone"
                          type="text"
                          className="form-control"
                          id="Phone"
                          defaultValue="(436) 486-3538 x29071"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="Email"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        E-mail
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="email"
                          type="email"
                          className="form-control"
                          id="Email"
                          defaultValue="k.anderson@example.com"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="Twitter"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Perfil no Twitter
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="twitter"
                          type="text"
                          className="form-control"
                          id="Twitter"
                          defaultValue="https://twitter.com/#"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="Facebook"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Perfil no Facebook
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="facebook"
                          type="text"
                          className="

form-control"
                          id="Facebook"
                          defaultValue="https://facebook.com/#"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="Instagram"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Perfil no Instagram
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="instagram"
                          type="text"
                          className="form-control"
                          id="Instagram"
                          defaultValue="https://instagram.com/#"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="Linkedin"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Perfil no Linkedin
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="linkedin"
                          type="text"
                          className="form-control"
                          id="Linkedin"
                          defaultValue="https://linkedin.com/#"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">
                        Salvar Alterações
                      </button>
                    </div>
                  </form>
                  {/* Fim do formulário de edição de perfil */}
                </div>
                <div className="tab-pane fade pt-3" id="profile-settings">
                  {/* Formulário de configurações */}
                  <form>
                    <div className="row mb-3">
                      <label
                        htmlFor="fullName"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Notificações por e-mail
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="changesMade"
                            
                          />
                          <label
                            className="form-check-label"
                            htmlFor="changesMade"
                          >
                            Alterações feitas na sua conta
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="newProducts"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="newProducts"
                          >
                            Informações sobre novos produtos e serviços
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="proOffers"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="proOffers"
                          >
                            Ofertas de marketing e promoções
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="securityNotify"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="securityNotify"
                          >
                            Alertas de segurança
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">
                        Salvar Alterações
                      </button>
                    </div>
                  </form>
                  {/* Fim do formulário de configurações */}
                </div>
                <div
                  className="tab-pane fade pt-3"
                  id="profile-change-password"
                >
                  {/* Formulário de alteração de senha */}
                  <form>
                    <div className="row mb-3

">
                      <label
                        htmlFor="currentPassword"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Senha atual
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="password"
                          type="password"
                          className="form-control"
                          id="currentPassword"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="newPassword"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Nova senha
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="newpassword"
                          type="password"
                          className="form-control"
                          id="newPassword"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="renewPassword"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Digite a nova senha novamente
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="renewpassword"
                          type="password"
                          className="form-control"
                          id="renewPassword"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">
                        Alterar Senha
                      </button>
                    </div>
                  </form>
                  {/* Fim do formulário de alteração de senha */}
                </div>
              </div>
              {/* Fim das abas com borda */}
            </div>
          </div>
        </div>
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
}
