import React from "react";
import { EstiloPagina } from "./styled";
// import Header from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";
import Main from "../../components/Main";
import Footer from "../../components/Footer"

export default class Home extends React.Component {
    render() {
        return (
            <EstiloPagina>
                <div className="home">
                    <div className="conteudo">
                        <MenuLateral />
                        <Main />
                    </div>
                    <Footer />
                </div>
            </EstiloPagina>
        );
    }
}