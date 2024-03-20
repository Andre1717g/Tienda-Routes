import React from "react";
import { NavLink } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Button, invertTheme,theme } from "../estilos-componentes/theme";
// En el archivo donde estás importando Button

const Home = () => {
    return(
      <ThemeProvider theme={theme}>
      <div className="feactures">
        <h1>Bienvenido</h1>
        <p>Somos una tienda online de celulares.</p>
        {/* <NavLink to= "/search-page" ><ButtonVm> Ir a pagina de busqueda</ButtonVm> </NavLink> */}
        <ThemeProvider  theme={invertTheme}>
        <NavLink to= "/search-page" ><Button> Ir a pagina de busqueda</Button> </NavLink>
        </ThemeProvider>
      </div>
      </ThemeProvider>
    )
  }
  export default Home;