import React from "react";
import styled from "styled-components";

const EstiloTracks = styled.div`
  display: flex;
  background-color: orange;
  width: 88%;
  height: 100vh;
  color: #1C1C1C;
  align-items: center;
  justify-content: center;
`
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

const Musica = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default class Tracks extends React.Component {
    state = {
        name: "",
        artist: "",
        url: ""
    }

    render() {
        return (
            <EstiloTracks>
                <div className="tracks">
                    <h2>Tracks</h2>
                    {this.state.tracks.map((tracks, i) => {
                        return (
                            <Musica>
                            TRACKS
                            {/* <button className="addTrack" onClick={() => this.addTrackToPlaylist(track.id)}>+</button>
                            <p key={i}>{track.name}</p>
                            <button className="deleteButton" onClick={() => this.deletePlaylist(track.id)}>X</button> */}
                            </Musica>
                        )})}
                    <input placeholder={"Música..."} value={this.state.inputValue} onChange={this.onValueChange} />
                    <input placeholder={"Artista..."} value={this.state.inputValue} onChange={this.onValueChange} />
                    <input placeholder={"URL..."} value={this.state.inputValue} onChange={this.onValueChange} />
                    <div>
                        <button onClick={this.createPlaylist}>Adicionar música</button>
                    </div>
                </div>
            </EstiloTracks>
        );
    }
}