import React from "react";
import styled from "styled-components";
import axios from "axios";

const EstiloPlaylists = styled.div`
  margin-left: 24px;

  p {
    color: #dadada;
  }

  p:hover {
    cursor: pointer;
    color: #a1a1a1;
  }

  button {
    width: 100%;
  }
`

export default class App extends React.Component {
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

  onClickCreatePlaylist = () => {
    return axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      {
        name: this.state.inputValue
      },
      {
        headers: {
          Authorization: "anderson-leite-johnson"
        }
      }
    )
      .then(() => {
        this.getAllPlaylists().then((response) => {
          this.setState({ inputValue: "" });
          this.setState({ playlists: response.data.result.list });
        });
      });
  };

  onValueChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  componentDidMount = () => {
    this.getAllPlaylists().then((response) => {
      this.setState({ playlists: response.data.result.list });
    });
  };

  render() {
    return (
      <div className="playlists">
        <EstiloPlaylists>
        <h2>Playlists</h2>
        {this.state.playlists.map((playlist, i) => {
          return <p key={i}>{playlist.name}</p>;
        })}
        <input value={this.state.inputValue} onChange={this.onValueChange} />
        <div>
          <button onClick={this.onClickCreatePlaylist}>Create Playlist</button>
        </div>
        </EstiloPlaylists>
      </div>
    );
  }
}