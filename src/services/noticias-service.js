
export async function sendNoticia(url, values) {
  let formValues = new FormData();
  
  formValues.append("departamento", values.departamento);
  formValues.append("contenido", values.contenido);

  if(values.multimedia.length > 0){
    let filesForm = new FormData();
    values.multimedia.foreach((file, i) => {
      filesForm.append(i, file)
    })

    try {
      const filesResponse = await fetch('/api/publish', {
        method: "POST",
        body: filesForm,
      });
  
      if (!filesResponse.ok) {
        throw new Error("Error al enviar archivos de noticia");
      }
      const filesString = await filesResponse.json();
      formValues.append("archivos", JSON.stringify(filesString));
    } catch (error) {
      return error.message;
    }
  }
  
  try {
    const response = await fetch(url, {
      method: "POST",
      body: formValues,
    });

    if (!response.ok) {
      throw new Error("Error al enviar noticia:");
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    return error.message;
  }
}
