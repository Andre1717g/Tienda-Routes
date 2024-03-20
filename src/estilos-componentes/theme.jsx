import styled from "styled-components"

export const colors= {  
    primary: 'blue',
    secondary: 'darkgray',
    danger: 'red',
    warning: 'yellow',
    success: '#5cb85c',
    info: 'lightblue'

}

export const theme = {
    fg: '#bf4f74',
    bg: 'white'
    
}

export const invertTheme = ( { fg, bg } ) => ({
    fg: bg,
    bg: fg
})

export const Button = styled.button`
    color: ${props => props.theme.fg};
    border: 2px solid ${props => props.theme.fg};
    background: ${props => props.theme.bg};

    font-size: 1em;
    margin-bottom: 30px;
    padding: 0.25em 1em;
    border-radius: 3px;
    cursor: pointer;
    `