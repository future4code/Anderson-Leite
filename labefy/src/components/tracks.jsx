import React from "react";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

export default class Tracks extends React.Component {
    state = {
        tracks: [],
        trackName: "",
        artist: "",
        url: ""
    };

    getPlaylistTracks = () => {
        axios.get(`${BASE_URL}/${this.props.playlistId}/tracks`,
        {
            headers:
            {
                Authorization: "anderson-leite-johnson"
            },
        })
        .then(res => {this.setState({tracks: res.data.result.tracks})
        })
        .catch (err => {
            alert(err.message)
        });
    };

    componentDidMount = () => {
        this.getPlaylistTracks()
    };

    changeInputValues = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    addTrackToPlaylist = () => {
        const body = {
            name: this.state.trackName,
            artist: this.state.artist,
            url: this.state.url
        };
        axios.post(`${BASE_URL}/${this.props.playlistId}/tracks`, body,
            {
                headers: {
                    Authorization: "anderson-leite-johnson"
                }
            }
        )
        .then(() => {
            this.getPlaylistTracks();
        })
        .catch(err => {
            alert(err.message);
        });
        this.setState({
            trackName: "",
            artist: "",
            url: ""
        })
    };
    
    deleteTrackFromPlaylist = (trackId) => {
        axios.delete(`${BASE_URL}/${this.props.playlistId}/tracks/${trackId}`,
            {
                headers: {
                    Authorization: "anderson-leite-johnson"
                }
            })
            .then(() => {
                alert("Música removida da playlist!")
                this.getPlaylistTracks();
            })
            .catch(err => {
            alert(err.message);
            });
    };

    render() {
        const tracks = this.state.tracks.map((track => {
            return (
                <div
                    key={track.id}
                    trackName={track.name}
                    artist={track.artist}
                    url={track.url}
                    trackId={track.id}
                    deleteTrackFromPlaylist={this.deleteTrackFromPlaylist}         
                />
            )
        }))

        return (
            <div>
                <div>
                    <label>Nome da música:</label>
                        <input 
                            placeholder="Nome da música"
                            name="trackName"
                            value={this.state.trackName}
                            onChange={this.changeInputValues}
                        />
                </div>
                <div>
                    <label>Artista:</label>
                    <input 
                        placeholder="Nome do Artista"
                        name="artist"
                        value={this.state.artist}
                        onChange={this.changeInputValues}
                    />
                </div>
                <div>
                    <label>URL da música:</label>
                    <input 
                        placeholder="URL da música"
                        name="url"
                        value={this.state.url}
                        onChange={this.changeInputValues}
                    />
                </div>
                <button type="submit" >Adicionar música</button>
                {tracks}
                <button onClick={() => this.props.changePage("playlists", "")}>Voltar para playlists</button>
            </div>
        )

    }
}