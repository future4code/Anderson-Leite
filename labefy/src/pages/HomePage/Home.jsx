import React from "react";
import { EstiloPagina } from "./styled";
import Header from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";
import Main from "../../components/Main";
import Tracks from "../../components/Tracks";
import Footer from "../../components/Footer"

export default class Home extends React.Component {
    state = {
        currentPage: "home"
    }
    
    changePage = (currentPage) => {
        this.setState({currentPage: currentPage})
    }

    render() {
        const selectPage = () => {
            switch (this.state.currentPage){
                case "main":
                    return <Main />
                case "tracks":
                    return <Tracks />
                default:
                    return <Main />
                }
            }

        return (
            <EstiloPagina>
                <div className="home">
                    <div className="conteudo">
                        <MenuLateral changePage={this.changePage}/>
                        {selectPage()}
                    </div>
                    <Footer />
                </div>
            </EstiloPagina>
        );
    }
}