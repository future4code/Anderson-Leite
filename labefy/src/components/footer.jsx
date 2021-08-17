import React from "react";
import styled from "styled-components";
import axios from "axios";
import Logo from "../assets/Logo.png";

const EstiloFooter = styled.div`
    display: flex;
    width: 100%;
    height: 40vh;
    color: white;
    background-color: black;
    justify-content: space-evenly;

    div {
        margin-top: 30px;
    }

    p {
        text-shadow: 0px 0px 1px #ffffff;

    &:hover {
        text-shadow: 0px 0px 1px #ffa600;
        cursor: pointer;
        color: orange;
        }
    }

    .column-1 {
        display: flex;
        align-items: center;
        height: 51px;
    }

    img {
        width: 36px;
        height: 36px;
    }

    h1 {
        margin: 0 0 0 8px;
    }

    h4 {
        color: #555555;
    }
`

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
            <EstiloFooter>
                <div className="column-1">
                    <img src={Logo}/>
                    <h1>Labefy</h1>
                </div>
                <div className="column-2">
                    <h4>EMPRESA</h4>
                    <p>Sobre</p>
                    <p>Empregos</p>
                    <p>For the Record</p>
                </div>
                <div className="column-3">
                    <h4>COMUNIDADES</h4>
                    <p>Para Artistas</p>
                    <p>Desenvolvedores</p>
                    <p>Publicidade</p>
                    <p>Investidores</p>
                    <p>Fornecedores</p>
                </div>
                <div className="column-4">
                    <h4>LINKS ÚTEIS</h4>
                    <p>Suporte</p>
                    <p>Player da Web</p>
                    <p>Aplicativo móvel grátis</p>
                </div>
            </EstiloFooter>
            </div>
        );
    }
}