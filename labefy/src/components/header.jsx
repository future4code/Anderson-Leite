import React from "react";
import styled from "styled-components";
import axios from "axios";

const EstiloHeader = styled.div`
    display: flex;
    /* width: 100%; */
    height: 8vh;
    background-color: green;
    justify-content: space-evenly;
    align-items: center;

    p {
        
    }
`

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
            <EstiloHeader>
                <p>Login</p>
                <p>Meu Perfil</p>
            </EstiloHeader>
            </div>
        );
    }
}