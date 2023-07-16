export function mockNoticias() {
  return {
    data: [
      {
        "_id": "64ad6bb748f383964f629f07",
        "departamento": {
          "_id": "64874b401ccc73e359451bbd",
          "nombre": "Departamento A",
          "urlLogo": "https://thumbs.dreamstime.com/z/icono-de-la-manzana-44274908.jpg",
          "__v": 0
        },
        "fechaPublicacion": "1689086903162",
        "contenido": "Publicacion local insomnia",
        "archivos": [
          {
            "_id": "64ad6bb748f383964f629f05",
            "nombre": "c0ee2fb7-da04-4fff-acc8-8e02b53a5c44.jpg",
            "tipo": "Imagen",
            "tamano": 45263,
            "fileId": "1ERbskj__WJ4WjDEPS-YRmctf34ZzJOd1",
            "enlace": "https://drive.google.com/file/d/1ERbskj__WJ4WjDEPS-YRmctf34ZzJOd1/view",
            "descargar": "https://drive.google.com/u/0/uc?id=1ERbskj__WJ4WjDEPS-YRmctf34ZzJOd1&export=download",
            "totalDescargas": 0,
            "__v": 0
          }
        ],
        "__v": 0
      },
      {
        "_id": "64ad66ee48f383964f629f02",
        "departamento": {
          "_id": "64874b401ccc73e359451bbd",
          "nombre": "Departamento A",
          "urlLogo": "https://thumbs.dreamstime.com/z/icono-de-la-manzana-44274908.jpg",
          "__v": 0
        },
        "fechaPublicacion": "1689085678884",
        "contenido": "Publicacion vacia",
        "archivos": [],
        "__v": 0
      },
      {
        "_id": "64ad64d648f383964f629eff",
        "departamento": {
          "_id": "64874b401ccc73e359451bbd",
          "nombre": "Departamento A",
          "urlLogo": "https://thumbs.dreamstime.com/z/icono-de-la-manzana-44274908.jpg",
          "__v": 0
        },
        "fechaPublicacion": "1689085142372",
        "contenido": "Publicacion con docs",
        "archivos": [
          {
            "_id": "64ad64d448f383964f629efb",
            "nombre": "Informe de Actividades Marzo-Abril.xlsx",
            "tipo": "Documento",
            "tamano": 15797,
            "fileId": "1pY_8C1hnbjhTGJUVxz8g5t-ZIc5fnD3K",
            "enlace": "https://drive.google.com/file/d/1pY_8C1hnbjhTGJUVxz8g5t-ZIc5fnD3K/view",
            "descargar": "https://drive.google.com/u/0/uc?id=1pY_8C1hnbjhTGJUVxz8g5t-ZIc5fnD3K&export=download",
            "totalDescargas": 0,
            "__v": 0
          },
          {
            "_id": "64ad64d648f383964f629efd",
            "nombre": "es-hoja-cuadriculada-negro (2).pdf",
            "tipo": "Documento",
            "tamano": 12929,
            "fileId": "1jQeiIo2lnIxpjqPBT-fhMSG7R5Ss3rgZ",
            "enlace": "https://drive.google.com/file/d/1jQeiIo2lnIxpjqPBT-fhMSG7R5Ss3rgZ/view",
            "descargar": "https://drive.google.com/u/0/uc?id=1jQeiIo2lnIxpjqPBT-fhMSG7R5Ss3rgZ&export=download",
            "totalDescargas": 0,
            "__v": 0
          }
        ],
        "__v": 0
      },
      {
        "_id": "64ac736fb63c2fbff4158b67",
        "departamento": {
          "_id": "64874b401ccc73e359451bbd",
          "nombre": "Departamento A",
          "urlLogo": "https://thumbs.dreamstime.com/z/icono-de-la-manzana-44274908.jpg",
          "__v": 0
        },
        "fechaPublicacion": "1689023343146",
        "contenido": "Publicacion con docs",
        "archivos": [],
        "__v": 0
      },
      {
        "_id": "64a48449e718954aad900b87",
        "departamento": {
          "_id": "64874b401ccc73e359451bbd",
          "nombre": "Departamento A",
          "urlLogo": "https://thumbs.dreamstime.com/z/icono-de-la-manzana-44274908.jpg",
          "__v": 0
        },
        "fechaPublicacion": "1688503369396",
        "contenido": "Publicacion sin archivos",
        "archivos": [],
        "__v": 0
      }
    ],
    isLoading: false,
    error: null,
  };
}

export function mockCountNoticias(){
  return {
    data: {
      "filecount": 26
    },
    isLoading: false,
    error: null
  }
}

export function mockDepartamentos(){
  return {
    data: [
      {
        "_id": "64874b401ccc73e359451bbd",
        "nombre": "Departamento A",
        "urlLogo": "https://thumbs.dreamstime.com/z/icono-de-la-manzana-44274908.jpg",
        "__v": 0
      },
      {
        "_id": "648893832efaaaff55b2a843",
        "nombre": "Departamento B",
        "urlLogo": "https://w7.pngwing.com/pngs/701/782/png-transparent-logo-book-book-writing-blue-text-comic-book.png",
        "__v": 0
      },
      {
        "_id": "648b456a810b363e11711361",
        "nombre": "Departamento C",
        "urlLogo": "https://cdn-icons-png.flaticon.com/512/7787/7787798.png",
        "__v": 0
      }
    ],
    isLoading: false,
    error: null
  }
}

export function mockArchivos() {
  return {
    data: [
      {
          "_id": "648c89a48b9c471d47f0e56e",
          "tipoMultimedia": "Documento",
          "enlaces": [
              "https://drive.google.com/file/d/1oL6boFyP1P-C3-sPq2-ivYm6YxfdnI6f/view"
          ],
          "__v": 0
      },
      {
          "_id": "648c7b0686d8783bfec98504",
          "tipoMultimedia": "Documento",
          "enlaces": [
              "https://drive.google.com/file/d/1mzD3tu2DgEXdLt51k8OPWdQqM8HNbMHg/view"
          ],
          "__v": 0
      },
      {
          "_id": "648b4aa006f7a6994e15f7df",
          "tipoMultimedia": "Documento",
          "enlaces": [
              "https://drive.google.com/file/d/1j-Bj_URE4WVEw81h2Rm-LONwnHDhs1Qj/view"
          ],
          "__v": 0
      },
      {
          "_id": "648b485f858728bf9dd819bf",
          "tipoMultimedia": "Documento",
          "enlaces": [
              "https://drive.google.com/file/d/1S9cyM2ssSp9cctjHFvk2gEBp2V4v2gmZ/view"
          ],
          "__v": 0
      }
  ],
    isLoading: false,
    error: null,
  };
}



