import React from "react";
import styled from "styled-components";
import axios from "axios";
import TelaPrincipal from "../pages/telaPrincipal";
import TelaPlaylist from "../pages/telaPlaylist";

const EstiloPlaylists = styled.div`
  margin-left: 24px;

  p {
    color: #dadada;
  
    &:hover {
      cursor: pointer;
      color: orange;
    }
  }

  button {
    width: 100%;
    cursor: pointer;
    background-color: white;
    color: black;
    border-radius: 2px;
    border: none;
    
    &:hover {
      background-color: #dadada;
    }
  }

  .deleteButton {
    width: 24px;
    height: 20px;
  }

  .addTrack {
    width: 24px;
    height: 20px;
  }
`

const Playlist = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default class Playlists extends React.Component {
  state = {
    playlists: [],
    inputValue: ""
  };

  getAllPlaylists = () => {
    return axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      {
        headers: {
          Authorization: "anderson-leite-johnson"
        }
      }
    );
  };

  createPlaylist = () => {
    return axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      {
        name: this.state.inputValue
      },
      {
        headers: {
          Authorization: "anderson-leite-johnson"
        }
      })
      .then(() => {
        this.getAllPlaylists().then((res) => {
          this.setState({ inputValue: "" });
          this.setState({ playlists: res.data.result.list });
        });
      });
  };

  addTrackToPlaylist = (playlistId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`
    axios.post(url, {
        name: "",
        artist: "",
        url: ""
      },
      {
        headers: {
          Authorization: "anderson-leite-johnson"
        }
      })
      .then((res) => {
        console.log(res)
        // this.getAllPlaylists().then((res) => {
        //   this.setState({ playlists: res.data.result.list });
        // })
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  onValueChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  componentDidMount = () => {
    this.getAllPlaylists().then((res) => {
      this.setState({ playlists: res.data.result.list });
    });
  };

  deletePlaylist = (playlistId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`
    axios.delete(url, {
        headers: {
            Authorization: "anderson-leite-johnson"
        }
    })
    .then(() => {
      alert("Playlist deletada!")
      this.getAllPlaylists().then((res) => {
        this.setState({ playlists: res.data.result.list });
      })
    })
    .catch((err) => {
      alert("Erro! Tente novamente!")
    })
}

// mudarTela = (Tela) => {
//   this.setState({telaAtual: Tela})
// }

// escolherTela = () => {
//   switch (this.state.telaAtual){
//     case "telaPrincipal":
//       return <TelaPrincipal mudarTela={this.mudarTela}/>
//     case "telaPlaylist":
//       return <TelaPlaylist mudarTela={this.mudarTela}/>
//     default:
//       return <TelaPrincipal mudarTela={this.mudarTela}/>
//   }
// }

  render() {
    return (
      <div className="playlists">
        <EstiloPlaylists>
        <h2>Playlists</h2>
        {this.state.playlists.map((playlist, i) => {
          return (
          <div>
            <Playlist>
            <button className="addTrack" onClick={() => this.addTrackToPlaylist(playlist.id)}>+</button>
            <p key={i}>{playlist.name}</p>
            <button className="deleteButton" onClick={() => this.deletePlaylist(playlist.id)}>X</button>
            </Playlist>
          </div>
        )})}
        <input placeholder={"Nova playlist..."} value={this.state.inputValue} onChange={this.onValueChange} />
        <div>
          <button onClick={this.createPlaylist}>Criar Playlist</button>
        </div>
        </EstiloPlaylists>
      </div>
    );
  }
}