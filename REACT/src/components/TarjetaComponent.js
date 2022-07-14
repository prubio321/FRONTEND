import React from "react";

const TarjetaComponent = ({usuario, tarjetaDelete}) => {
    return(
    <div className = "card">
    <div className = "card-body">
      <h3 className="card-title">{usuario.nombre} {usuario.apellido}</h3>
      <p>Edad: {usuario.edad}</p>
      <hr/>
      <div className="d-flex justify-content-end">
        <button className="btn btn-sm btn-outline-primary me-2" onClick={() => editarUsuario(usuario.key)}>Editar</button>
        <button className="btn btn-sm btn-outline-danger" onClick={() => tarjetaDelete(usuario)}>Eliminar</button>
      </div>
    </div>
  </div>)
}

export default TarjetaComponent;
