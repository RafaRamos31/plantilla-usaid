import { SiteNavBar } from "../components/SiteNavBar.jsx";
import data from "../resources/general-data.json"; 
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import '../assets/styles/home.css';
import { Footer } from "../components/Footer.jsx";

export const Home = () => {
  return (
    <>
      <SiteNavBar/>
      <Container>
        <section>
          <Image src="https://cdn.aarp.net/content/dam/aarp/health/conditions_treatments/2023/03/1140-heart-health-weight-loss-esp.jpg" 
          className="animate__animated animate__fadeIn" id="main-image" fluid/>
          <h1 id="main-title" className="animate__animated animate__fadeInUp">Proyecto Avanzando la Nutrición en Honduras</h1>
          <p id="text-departamento" className="animate__animated animate__fadeInUp">Departamento de Copán</p>
        </section>

        <section className="sobre-nosotros">
          <h2 className="sub-title">¿Quiénes Somos?</h2>
          <Card>
            <Card.Body className="nosotros-container">
              <Row>
              <Col md={9}>
                <p className="text-nosotros">
                  {data["quienes-somos"]}
                </p>
              </Col>
              <Col md={3}>
                <Image id="img-about" src="https://noticias.uai.cl/assets/uploads/2018/02/01-beneficas-980x470-c-default.jpg" fluid thumbnail/>
              </Col>
            </Row>

            <Row>
              <Col md={3}>
                <Image id="img-about" src="https://live.staticflickr.com/4870/45448551175_ed67a561b4_b.jpg" fluid rounded/>
              </Col>
              <Col md={9}>
                <blockquote className="text-fundador">
                  {data.mensaje}
                </blockquote>
                <p className="autor">
                  {data.autor}
                </p>
              </Col>
            </Row>
            </Card.Body>
          </Card>
        </section>

        <section className="mision-vision">
          <h2 className="sub-title">Misión y Visión</h2>
          <Row>
            <Col md={6}>
              <Card className="h-100">
                <Card.Body className="item">
                  <div className="icon">
                    <i className="bi bi-book text-icon"></i>Misión
                  </div>
                  <div className="content">
                    {data.mision}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100">
                <Card.Body className="item">
                  <div className="icon">
                    <i className="bi bi-search text-icon"></i>Visión
                  </div>
                  <div className="content">
                    {data.vision}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="organigrama">
          <h2 className="sub-title">Organigrama</h2>
          <div className="media-container">
            <Image src="https://www.ticportal.es/wp-content/uploads/matrix-structure-design.png?x25788" fluid thumbnail/>
          </div>
        </section>

        <section className="valores">
          <h2 className="sub-title">Nuestros Valores</h2>
          <Card>
            <Card.Body className="nosotros-container">
            <ul>
              {
                data.valores.map((valor, i) => (<li key={i}>
                  <b>{valor.nombre}</b>{': ' + valor.contenido}
                </li>))
              }
              </ul>
            </Card.Body>
          </Card>
        </section>

        <section className="cobertura">
          <h2 className="sub-title">Cobertura</h2>
          <div className="media-container">
          <iframe title="places-map" className="mapa"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d493582.2588882428!2d-89.14612277218666!3d14.875048111687356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63f61fa675ea93%3A0xb654128df1967c0f!2sConsejo%20Intermunicipal%20Higuito!5e0!3m2!1ses-419!2shn!4v1686173450121!5m2!1ses-419!2shn" 
            width="600" height="450" allowFullScreen="" loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}
