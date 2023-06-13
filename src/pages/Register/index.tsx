import { Link } from "react-router-dom";
import logo from "../../assets/images/logo2.png";

export function Register() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Páginas / Registro - Modelo de Template NiceAdmin Bootstrap</title>
      <meta content="" name="description" />
      <meta content="" name="keywords" />
      {/* Favicons */}
      <link href="assets/img/favicon.png" rel="icon" />
      <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
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
      <link href="assets/css/style.css" rel="stylesheet" />
      {/* =======================================================
  * Nome do Template: NiceAdmin
  * Atualizado em: 09 de Março de 2023 com Bootstrap v5.2.3
  * URL do Template: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
  * Autor: BootstrapMade.com
  * Licença: https://bootstrapmade.com/license/
  ======================================================== */}
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-4">
                    <Link
                      to="/"
                      className="logo d-flex align-items-center w-auto"
                    >
                      <img src={logo} alt="" />
                    </Link>
                  </div>
                  {/* Fim do Logo */}
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">
                          Criar uma Conta
                        </h5>
                        <p className="text-center small">
                          Insira seus dados pessoais para criar uma conta
                        </p>
                      </div>
                      <form className="row g-3 needs-validation">
                        <div className="col-12">
                          <label htmlFor="yourName" className="form-label">
                            Seu Nome Completo
                          </label>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="yourName"
                            required
                          />
                          <div className="invalid-feedback">
                            Por favor, insira seu nome!
                          </div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="yourEmail" className="form-label">
                            Seu Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="yourEmail"
                            required
                          />
                          <div className="invalid-feedback">
                            Por favor, insira um endereço de e-mail válido!
                          </div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="yourPassword" className="form-label">
                            Senha
                          </label>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="yourPassword"
                            required
                          />
                          <div className="invalid-feedback">
                            Por favor, insira sua senha!
                          </div>
                        </div>
                        <div className="col-12">
                          <button
                            className="btn btn-primary w-100"
                            type="submit"
                          >
                            Criar Conta
                          </button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">
                            Já tem uma conta?{" "}
                            <Link to="/login">Faça o login</Link>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      {/* Fim do #main */}
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
      {/* Arquivos JS do Fornecedor */}
      {/* Arquivo JS Principal do Template */}
    </>
  );
}
