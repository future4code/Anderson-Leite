import React from "react";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

const PlaylistsContainer = styled.div`
  display: flex;
  margin-left: 24px;
  margin-right: 24px;
  justify-content: space-between;
  align-items: center;

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
  }

  .addTrack {
    width: 24px;
  }
`

const Playlist = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
  }
`

export default class Playlists extends React.Component {
  state = {
    playlists: [],
    inputValue: "",
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
        alert("Playlist criada com sucesso!")
        this.getAllPlaylists().then((res) => {
          this.setState({ playlists: res.data.result.list });
          this.setState({ inputValue: "" });
        });
      })
      .catch ((err) => {
        alert("Já existe uma Playlist com este nome ou nenhum nome foi informado. Por favor, utilize um nome diferente.")
      });
  };

  onValueChange = (event) => {
    this.setState({ inputValue: event.target.value });
    this.setState({[event.target.name]: event.target.value})
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

  render() {
    const listPlaylists = this.state.playlists.map((playlist, i) => {
    return (
      <div className="playlists">
        <Playlist>
          {/* <button className="addTrack" onClick={() => this.addTrackToPlaylist(playlist.id)}>+</button> */}
          <p key={i}>{playlist.name}</p>
          <button className="deleteButton" onClick={() => this.deletePlaylist(playlist.id)}>X</button>
        </Playlist>
      </div>
    )});

    return (
      <PlaylistsContainer>
        <div>
          {listPlaylists}
          <div className="create">
            <input placeholder={"Nova playlist..."} value={this.state.inputValue} onChange={this.onValueChange} />
            <button onClick={this.createPlaylist}>Criar Playlist</button>
          </div>
        </div>
      </PlaylistsContainer>
    )}
    
}