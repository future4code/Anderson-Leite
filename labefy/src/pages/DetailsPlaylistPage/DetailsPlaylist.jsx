import React from "react";
import { EstiloPagina } from "../HomePage/styled";
// import Header from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";
import Tracks from "../../components/Tracks";
import Footer from "../../components/Footer";

export default class DetailsPlaylistPage extends React.Component {
    render() {
        return (
            <EstiloPagina>
                <div className="detailsPlaylist">
                    <div className="conteudo">
                        detalhes
                        <MenuLateral />
                        <Tracks />
                    </div>
                    <Footer />
                </div>
            </EstiloPagina>
        );
    }
}