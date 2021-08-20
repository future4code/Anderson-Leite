import React from "react";
import Home from "./pages/HomePage/Home";
import DetailsPlaylist from "./pages/DetailsPlaylistPage/DetailsPlaylist";

export default class App extends React.Component {
  state = {
    telaAtual: "home",
    playlistClicadaId: ""
  }

  goToDetailsPlaylistPage = (i) => {
    this.setState({telaAtual: "detailsPlaylist", playlistClicadaId: i})
  }

  goToHomePage = () => {
    this.setState({telaAtual: "home", playlistClicadaId: ""})
  }

  selectPage = () => {
    switch (this.state.telaAtual){
      case "home":
        return <Home goToDetailsPlaylistPage={this.goToDetailsPlaylistPage}/>
      case "detailsPlaylist":
        return <DetailsPlaylist goToHomePage={this.goToHomePage} id={this.state.playlistClicadaId}/>
      default:
        return <Home goToDetailsPlaylistPage={this.goToDetailsPlaylistPage}/>
    }
  }

  render() {
    return (
      <div>
        {this.selectPage()}
      </div>
    );
  }
}















  // mudarTela = (Tela) => {
  //   this.setState({telaAtual: Tela})
  // }

  // goToDetailsPlaylist = () => {
  //   this.setState({telaAtual: "homePage", clickedPlaylistId: ""})
  // }

  // escolherTela = () => {
  //   switch (this.state.telaAtual){
  //     case "loginPage":
  //       return <LoginPage mudarTela={this.mudarTela}/>
  //     case "homePage":
  //       return <HomePage mudarTela={this.mudarTela}/>
  //     case "detailsPlaylist":
  //       return <DetailsPlaylistPage goToDetailsPlaylist={this.goToDetailsPlaylist} playlistId={this.state.clickedPlaylistId}/>
  //     default:
  //       return <LoginPage mudarTela={this.mudarTela}/>
  //   }
  // }