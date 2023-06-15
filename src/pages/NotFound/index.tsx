import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Páginas / Não Encontrado</title>
      <meta content="" name="description" />
      <meta content="" name="keywords" />
      {/* Ícones favoritos */}
      <link href="assets/img/favicon.png" rel="icon" />
      <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
      {/* Fontes do Google */}
      <link href="https://fonts.gstatic.com" rel="preconnect" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet"
      />
      {/* Arquivos CSS do fornecedor */}
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
      {/* Arquivo CSS principal do template */}
      <link href="assets/css/style.css" rel="stylesheet" />
      {/* =======================================================
  * Nome do Template: NiceAdmin
  * Atualizado: 09 de Março de 2023 com Bootstrap v5.2.3
  * URL do Template: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
  * Autor: BootstrapMade.com
  * Licença: https://bootstrapmade.com/license/
  ======================================================== */}
      <main>
        <div className="container">
          <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
            <h1>404</h1>
            <h2>A página que você procura não existe.</h2>
            <Link className="btn" to="/">
              Voltar para a página inicial
            </Link>
          </section>
        </div>
      </main>
      {/* Fim #main */}
      <a
        href="#"
        className="back-to-top d-flex align-items

-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
      {/* Arquivos JS do fornecedor */}
      {/* Arquivo JS principal do template */}
    </>
  );
}
