
export async function sendLogin(nombre, password) {
  
  const formValues = new FormData();

  formValues.append("nombre", nombre);
  formValues.append("password", password);

  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/login', {
      method: "POST",
      body: formValues,
    });

    if (!response.ok) {
      throw new Error("Error al iniciar sesion");
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    return error.message;
  }
}

export function logout(){
  localStorage.removeItem("user-id");
  window.location.reload();
}