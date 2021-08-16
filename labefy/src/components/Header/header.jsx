import React from "react";
import styled from "styled-components";
import axios from "axios";

const EstiloHeader = styled.div`
    display: flex;
    width: 100%;
    height: 8vh;
    background-color: green;
    justify-content: flex-end;
    align-items: center;

    p {
        
    }
`

class Header extends React.Component {
    render() {
        return (
            <EstiloHeader>
            <div className="header">
                <p>Login</p>
                <p>Meu Perfil</p>
            </div>
            </EstiloHeader>
        );
    }
}

export default Header;