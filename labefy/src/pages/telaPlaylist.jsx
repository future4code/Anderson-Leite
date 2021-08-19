import React from "react";
import styled from "styled-components";
// import axios from "axios";
// import Header from "./components/header";
import MenuLateral from "../components/menuLateral";
import Tracks from "../components/tracks";
import Footer from "../components/footer";

const EstiloPagina = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #1C1C1C;
    .conteudo {
        display: flex;    
    }
`

export default class App extends React.Component {
    render() {
        return (
            <EstiloPagina>
                <div className="telaPrincipal">
                    <div className="conteudo">
                        <MenuLateral />
                        <Tracks />
                    </div>
                    <Footer />
                </div>
            </EstiloPagina>
        );
    }
}