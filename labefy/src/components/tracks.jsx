import React from "react";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { Link } from "react-router-dom";
import TracksCard from "./TracksCard";

const PlaylistDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TrackCreationForm = styled.form`
    width: 100vw;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    div {
        display: flex;
        /* flex-direction: column; */
    }
`

export default class Tracks extends React.Component {
    state = {
        tracks: [],
        trackName: "",
        artist: "",
        url: ""
    };

    componentDidMount = () => {
        this.getPlaylistTracks()
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

    changeInputValues = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    addTrackToPlaylist = (e) => {
        e.preventDefault()
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
    

    render() {
        const tracks = this.state.tracks.map((track => {
            return (
                <TracksCard
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
            <PlaylistDetailContainer>
                <TrackCreationForm onSubmit={this.addTrackToPlaylist} >
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
                </TrackCreationForm>
                {tracks}
                <button><Link to="/">Voltar</Link></button>
            </PlaylistDetailContainer>
        )

    }
}