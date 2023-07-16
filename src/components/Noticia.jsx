import { Card, Col, Row } from "react-bootstrap";
import { getDateString } from "../services/stringFormatter";
import { Departamento } from "./Departamento";
import { ContainerMultimedia } from "./multimedia/ContainerMultimedia";

export const Noticia = ({noticia}) => {
  return (
    <Card className="mb-4 mr-3">
      <Card.Header className="encabezado">
        <Row>
          <Col sm={8}>
            <Departamento key={noticia._id} nombre={noticia.departamento.nombre} urlLogo={noticia.departamento.urlLogo}/>
          </Col>
          <Col sm={4}>
            <p className="fecha">{getDateString(noticia.fechaPublicacion)}</p>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <p>
          {noticia.contenido}
        </p>
        <div className="container-multimedia">
        {
          noticia.archivos.length > 1 && noticia.archivos.every((archivo) => archivo.tipo === "Imagen") 
          ? <div> Galeria </div>
          : noticia.archivos.map((archivo, i) => (
            <ContainerMultimedia key={i} archivo={archivo}/>
          )) 
        }
        </div>
      </Card.Body>
    </Card>
  );
};
