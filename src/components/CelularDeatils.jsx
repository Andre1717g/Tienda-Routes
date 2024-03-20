import React from 'react';
import { useParams } from 'react-router-dom';
import { DetailsCont } from '../estilos-componentes/style-component';
import dataCelu from '../data/dataCelu';


const CelularDetails = () => {
    const {nameCelular} = useParams();
    const detalles = dataCelu[nameCelular];
  
    return(
      <DetailsCont>
        <h4>Detalles del movil {nameCelular}</h4>
        <h4>Modelo: {detalles.modelo}</h4>
        <h4>Precio: {detalles.precio}</h4>
        <h4>Descrpcion: {detalles.dec}</h4>
      </DetailsCont>
    )
  }

export default CelularDetails;