import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "./theme";
// import { NavLink } from "react-router-dom";


// diseño el boton del inicio
export const Button = styled.button`
  display: inline-block;
  font-weight: 400;     
  line-height: 1;       
  white-space: nowrap;  
  text-align: center;      
  cursor: pointer;                    
    user-select: none;
    border: 1px solid transparent;
    background: linear-gradient(90deg, #ff8a00, #e52e71);
    border: 1px solid white;
    /* color: ${colors.success};  de esta forma se llama un js expresado */
    color: black;
    font-size: 1.25rem;
    cursor: pointer;
    `

// diseño del header
export const Header= styled.header`
  display: flex;
  background-color: #3d393b;
  color: white;
  flex-direction: row;
  align-content: right;
  padding: 4px;
  justify-content: space-between;
  
  `

// diseño de la lista
  export const Stilolink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px;
  list-style-type: none;
  `
//ahora lista de informacion
export const Btnlink = styled.button`
background: linear-gradient(90deg, #ff8a00, #e52e71);
color: black;
padding: 10px;
margin: 10px;
border-radius: 5px;
border: 2px solid black;
cursor: pointer;
width: 80px;

&:hover{
  background: linear-gradient(90deg, #e52e71, #ff8a00);
  color: white;
}
`



export const DetailsCont = styled.div`
  background-color: aliceblue;
  color: black;
  border-radius: 5px;
  padding: 20px; /* Añade relleno para mejorar el aspecto */
  margin: 0 auto; /* Centra horizontalmente */
  width: 90%; /* Ancho inicial */

  /* Media query para pantallas de hasta 768px de ancho */
  @media only screen and (max-width: 768px) {
    width: 95%; /* Reducir el ancho a 95% */
    padding: 10px; /* Reducir el relleno */
  }

  /* Media query para pantallas de hasta 576px de ancho */
  @media only screen and (max-width: 576px) {
    width: 100%; /* Ancho al 100% */
    padding: 5px; /* Reducir aún más el relleno */
  }

  /* Media query para pantallas de hasta 375px de ancho */
  @media only screen and (max-width: 375px) {
    padding: 0; /* Sin relleno en pantallas más pequeñas */
  }
`;







