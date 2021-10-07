import React, { useState, useEffect } from "react";
import axios from "axios";

const ClientesCrud = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const cargarUsuarios = async () => {
      const res = await axios(
        "http://localhost:3000/usuarios-clientes/retornar"
      );
      console.log("ESTA ES LA API", res);
      setUsers(res.data);
    };
    cargarUsuarios();
  }, []);

  return (
    <>
      <ul>
        {users.map((user) => (
          <>
            <li key={user.id}>
              Nombre:{user.nombre}
              <br />
              Apellido:{user.apellido}
              <br />
              DNI: {user.dni}
              <br />
              E-Mail: {user.email}
              <br />
              <br />
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

export default ClientesCrud;
