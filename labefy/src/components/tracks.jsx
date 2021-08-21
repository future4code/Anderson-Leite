import React from "react";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

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

    getPlaylistTrack = (playlistId) => {
        return axios.get(`${BASE_URL}/${playlistId}/tracks`,
            {
                headers: {
                    Authorization: "anderson-leite-johnson"
                }
            })
            .then((res) => { 
            this.setState({
                track: res.data.result.tracks,
                playlistClicada: playlistId
            })
            .catch((err) => {
                alert(err.message)
            })
        })
        }

            // this.getPlaylistTrack().then((res) => {
            // })

    // addTrackToPlaylist = (playlistId) => {
    //     const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`
    //     const body = 
    //         {
    //             name: this.state.inputValue,
    //             artist: this.state.inputValue,
    //             url: this.state.inputValue
    //         }
    //         axios.post(url, body, 
    //         {
    //             headers: {
    //                 Authorization: "anderson-leite-johnson"
    //             }
    //         })
    //         .then((res) => {
    //             this.setState({ track: res.data.result.list })    
    //             this.getAllPlaylists().then((res) => {
    //                 this.setState({ playlists: res.data.result.list });
    //             })
    //         })
    //         .catch((err) => {
    //             alert(err.message)
    //         })
    // }

    // render() {
    //     const songs = this.state.track.map((song) => {
    //         return (
    //             <div className="songs">
    //                 <Musica>
    //                     {`Música: ${song.name} - Artista: ${song.artist}`}
    //                 </Musica>
    //             </div>
    //         );
    //     });

    //     const listPlaylist = this.state.list.map((playlist) => {
    //         return (
    //             <div>
    //                 <Musica onClick={() => this.getPlaylistTrack(playlist.id)} />
    //                 {playlist.name}
    //             )
    //         });
    //         {this.state.playlistClicada === playlist.id ? ( <div>{songs}</div>) : ( ""
    //     )}
    //     </div>
    //     )










    // }

}