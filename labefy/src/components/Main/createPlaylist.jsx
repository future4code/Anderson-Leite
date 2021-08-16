import React from "react";
import styled from "styled-components";
import axios from "axios";

const estiloPlaylist = styled.div`
    background-color: green;
`

// onClickCriarPlaylist = () => {
//     return axios
//         .post(
//             "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
//                 {
//                     name: this.state.inputValue
//                 },
//                 {
//                     headers: {
//                         Authorization: "iago-johnson"
//           }
//         }
//       )
//       .then(() => {
//         this.getAllPlaylists().then((response) => {
//           this.setState({ inputValue: "" });
//           this.setState({ playlists: response.data.result.list });
//         });
//       });
//   };


const createPlaylist = (name) => {
    return axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
        {
            name
        },
        {
            headers: {
                Authorization: ''
            }
        }
    );
};