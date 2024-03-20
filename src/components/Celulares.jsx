import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Button, theme } from "../estilos-componentes/theme";

const Celulares = ({ nameCelular }) => {
    // const { nameCelular } = useParams();
  
    return (
        <ThemeProvider theme={theme}> 
            <div className="feactures">
                <h2>Info de Celulares</h2>
                <h3>{nameCelular}</h3>
               <Link  to = "details">
                {" "}
                <Button> Ver Detalles</Button>
                {" "}
                </Link>
                <Outlet />
            </div>
        </ThemeProvider>
    );
}

export default Celulares;
