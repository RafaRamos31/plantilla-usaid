//import useFetch from "../hooks/useFetch.js";
import { mockDepartamentos } from "../services/mock-service.js";
import useForm from "../hooks/useForm.js";
import { sendNoticia } from "../services/noticias-service.js";
import { Button, Card, FloatingLabel, Form } from 'react-bootstrap';

export const Publicar = () => {
  //const { data, isLoading } = useFetch(process.env.REACT_APP_API_URL + '/departamentos');
  const { data, isLoading }  = mockDepartamentos();

  const { values, handleChange } = useForm({
    departamento: '',
    contenido: '',
    multimedia: []
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(await sendNoticia('https://api-usaid-copan.vercel.app/api' + '/noticias', values));
  };

  return (
    <Card>
      <Card.Header>
        <h3>Publicar noticia</h3>
      </Card.Header>
      <Card.Body>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <FloatingLabel label="Departamento">
            <Form.Select aria-label="Select Departamento"  id="departamento" name="departamento" onChange={handleChange}>
              <option>Seleccione un Departamento</option>
              {
                !isLoading &&
                data.map(depto => (<option key={depto._id} value={depto._id}>{depto.nombre}</option>))
              }
            </Form.Select>
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3">
          <FloatingLabel label="Contenido">
            <Form.Control
              as="textarea"
              placeholder="Contenido"
              style={{ height: '200px' }}
              name='contenido'
              id='contenido'
              onChange={handleChange}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Multimedia (imagenes o documentos)</Form.Label>
          <Form.Control type="file" name="multimedia" id="multimedia" multiple onChange={handleChange}/>
        </Form.Group>
        <div className="d-grid gap-2">
          <Button as="input" variant="info" type="submit" value="Publicar" />
        </div>
      </Form>
      </Card.Body>
    </Card>
  );
}
