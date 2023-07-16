import { ListGroup } from 'react-bootstrap';

export const BarraFiltros = () => {
  return (
    <aside>
      <h3>Filtros</h3>
      <ListGroup variant='dark' defaultActiveKey="#link1" >
        <ListGroup.Item variant='info' action href="#link1">
          Link 1
        </ListGroup.Item>
        <ListGroup.Item variant='info' action href="#link2">
          Link 2
        </ListGroup.Item>
        <ListGroup.Item variant='info' action href="#link3">
          Link 3
        </ListGroup.Item>
      </ListGroup>
    </aside>
  )
}
