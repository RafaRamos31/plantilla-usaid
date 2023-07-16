import useForm from "../hooks/useForm.js";
import { sendNoticia } from "../services/noticias-service.js";
import { Button, Card, Form } from 'react-bootstrap';

export const SubirArchivo = () => {
  const { values, handleChange } = useForm({
    multimedia: []
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(await sendNoticia(process.env.REACT_APP_API_URL + '/noticias', values));
  };

  return (
    <Card>
      <Card.Header>
        <h3>Subir Archivos</h3>
      </Card.Header>
      <Card.Body>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Multimedia (imagenes o documentos)</Form.Label>
          <Form.Control type="file" name="multimedia" id="multimedia" multiple onChange={handleChange}/>
        </Form.Group>
        <div className="d-grid gap-2">
          <Button as="input" variant="info" type="submit" value="Subir" />
        </div>
      </Form>
      </Card.Body>
    </Card>
  );
}
