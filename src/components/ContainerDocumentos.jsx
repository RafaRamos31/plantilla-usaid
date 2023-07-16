import { RecursoDocumento } from "./RecursoDocumento"

export const ContainerDocumentos = ({isLoading, documentos}) => {
  if(isLoading){
    return <p>Cargando datos...</p>
  }
  return (
    <div className="contenedor-documentos d-grid">
      {
        documentos.map((documento) => (
          <RecursoDocumento key={documento._id} documento={documento} />
        )) 
      }
    </div>
  )
}
