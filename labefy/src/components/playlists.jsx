import React from "react";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

const EstiloPlaylists = styled.div`
  display: flex;
  margin-left: 24px;
  margin-right: 24px;
  justify-content: center;

  p {
    color: #dadada;
  
    &:hover {
      cursor: pointer;
      color: orange;
    }
  }

  input {
    padding: 0;
    width: 100%;
    height: 20px;
    border: none;
    border-radius: 2px;
  }

  button {
    width: 100%;
    height: 20px;
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
    return axios.get(`${BASE_URL}`,
      {
        headers: {
          Authorization: "anderson-leite-johnson"
        }
      }
    );
  };

  createPlaylist = () => {
    return axios.post(`${BASE_URL}`,
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
      })
      .catch ((err) => {
        alert("Já existe uma Playlist com este nome ou nenhum nome foi informado. Por favor, utilize um nome diferente.")
      });
  };

  onValueChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  componentDidMount = () => {
    this.getAllPlaylists().then((res) => {
      this.setState({ playlists: res.data.result.list });
    });
  };

  deletePlaylist = (playlistId) => {
    return axios.delete(`${BASE_URL}/${playlistId}`,
      {
        headers: {
          Authorization: "anderson-leite-johnson"
        }
      }
    )
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

  getPlaylistTrack = (playlistId) => {
    return axios.get(`${BASE_URL}/${playlistId}/tracks`,
      {
        headers: {
          Authorization: "anderson-leite-johnson"
        }
      })
      .then(() => { 
      this.getPlaylistTrack().then((res) => {
        this.setState({ musicas: res.data.result.list });
      })
      .catch((err) => {
        alert(err.message)
      })
    });
  };


  // addTrackToPlaylist = (playlistId) => {
  //   const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`
  //   const body = {
  //     name: this.state.inputValue,
  //     artist: this.state.inputValue,
  //     url: this.state.inputValue
  //   }

  //   axios.post(url, body, 
  //     {
  //       headers: {
  //         Authorization: "anderson-leite-johnson"
  //       }
  //     })
  //     .then((res) => {
  //       this.setState({ tracks: res.data.result.list })

  //       this.getAllPlaylists().then((res) => {
  //         this.setState({ playlists: res.data.result.list });
  //       })
  //     })
  //     .catch((err) => {
  //       alert(err.message)
  //     })
  // }

  // getTracks = () => {

  // }

  render() {
    return (
      <EstiloPlaylists>
        <div className="playlists">
          <h2>Playlists</h2>
          {this.state.playlists.map((playlist, i) => {
            return (
              <Playlist>
                <button className="addTrack" onClick={() => this.getPlaylistTrack(playlist.name)}>+</button>
                <p key={i}>{playlist.name}</p>
                <button className="deleteButton" onClick={() => this.deletePlaylist(playlist.id)}>X</button>
              </Playlist>
          )})}
          <input placeholder={"Nova playlist..."} value={this.state.inputValue} onChange={this.onValueChange} />
          {/* <div> */}
            <button onClick={this.createPlaylist}>Criar Playlist</button>
          {/* </div> */}
        </div>
      </EstiloPlaylists>
    );
  }
}