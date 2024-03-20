import React from "react";
import { Btnlink } from "../estilos-componentes/style-component";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const celulares = [
    'Samsung',
    'LG',
    'Xiaomi',
    'iPhone',
    'Huawei',
    'Nokia'
  ];

  return (
    <div className="feactures1">
      <h2>Pagina de Busqueda</h2>
      <ul className="listas">
        {celulares.map((celular) => (
          <li key={celular}>
            <Link to={`/celulares/${celular}`}> {/* Corrige el atributo to */}
              <Btnlink>{celular}</Btnlink>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default SearchPage;
