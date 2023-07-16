import { Button, Card, Col, Container, Row } from 'react-bootstrap'

export const Documento = ({archivo}) => {

  return (
    <Container>
      <Row>
          <Col sm={0} md={4}>
          </Col>
          <Col>
            <Card>
              <Card.Header>{archivo.nombre}</Card.Header>
              <Card.Body className='d-flex justify-content-center'>
                <Button variant='info' href={archivo.enlace} target='_blank'>
                  <i className="bi bi-eye-fill"></i>
                </Button>
                <Button variant='info' href={archivo.descargar} target='_blank'>
                  <i className="bi bi-download"></i>
                </Button>
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col sm={6}>{archivo.tamano}</Col>
                  <Col sm={6}><i className="bi bi-arrow-down"></i> {archivo.totalDescargas}</Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
    </Container>
  )
}
