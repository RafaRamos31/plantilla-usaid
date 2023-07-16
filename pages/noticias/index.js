import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { ContainerNoticias } from "../../src/components/ContainerNoticias.jsx";
import { mockNoticias } from "../../src/services/mock-service.js";
import { SiteNavBar } from "../../src/components/SiteNavBar.jsx";
import { Publicar } from "../../src/components/Publicar.jsx";
import { PaginacionNoticias } from "../../src/components/PaginacionNoticias.jsx";
import { BarraFiltros } from "../../src/components/BarraFiltros.jsx";
//import useFetch from "../hooks/useFetch.js";
import '../../src/assets/stylesheets/noticias.css';

export default function Noticias(){
  const index = 1;
  //const { data, isLoading } = useFetch(process.env.REACT_APP_API_URL + '/noticias/' + index);
  const { data, isLoading } = mockNoticias();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <SiteNavBar/>
      <main>
        <Row>
          <Col md={3}>
            <BarraFiltros />
            <Button variant="info" onClick={handleShow}>
              Publicar
            </Button>
          </Col>
          <Col md={9}>
            <PaginacionNoticias index={Number.parseInt(index)}/>
            {!isLoading && <ContainerNoticias noticias={data} />} 
            <PaginacionNoticias index={Number.parseInt(index)}/>
          </Col>
        </Row>    
      </main>
      <Modal show={show} onHide={handleClose}>
        <Publicar />
      </Modal>
    </>
  );
}
