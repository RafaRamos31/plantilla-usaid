import React from 'react'

export const Departamento = ({nombre, urlLogo}) => {
  return (
    <div className="departamento">
      <img className='icon-departamento' src={urlLogo} alt={"logo" + nombre} />
      <p>{nombre}</p>
    </div>
  )
}
