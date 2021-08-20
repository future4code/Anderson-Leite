import React from "react";
import styled from "styled-components";

const EstiloPagina = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #1C1C1C;
    .conteudo {
        display: flex;    
    }
`

export default class Login extends React.Component {
    render() {
        return (
            <EstiloPagina>
                <div className="login">
                    Login
                    <div>
                        Entrar
                    </div>
                    <div>
                        Cadastrar
                    </div>
                </div>
            </EstiloPagina>
        );
    }
}