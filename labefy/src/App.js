import React from "react";
import styled from "styled-components";
import TelaPrincipal from "./pages/telaPrincipal";
import TelaPlaylist from "./pages/telaPlaylist";
// import axios from "axios";
// import Header from "./components/header";
// import MenuLateral from "./components/menuLateral";
// import Footer from "./components/footer";

export default class App extends React.Component {
  state = {
    telaAtual: "telaPrincipal"
  }

  mudarTela = (Tela) => {
    this.setState({telaAtual: Tela})
  }

  escolherTela = () => {
    switch (this.state.telaAtual){
      case "telaPrincipal":
        return <TelaPrincipal mudarTela={this.mudarTela}/>
      case "telaPlaylist":
        return <TelaPlaylist mudarTela={this.mudarTela}/>
      default:
        return <TelaPrincipal mudarTela={this.mudarTela}/>
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.mudarTela("telaPrincipal")}>Principal</button>
        <button onClick={() => this.mudarTela("telaPlaylist")}>Playlist</button>
        {this.escolherTela()}
      </div>
    );
  }
}       