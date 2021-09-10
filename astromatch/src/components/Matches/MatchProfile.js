import React from 'react';
import styled from 'styled-components';

const MatchProfileContainer = styled.div`
    display: flex;
    max-width: 100%;
    padding: 8px;
    align-items: center;
    border-bottom: 1px solid orange;
    
    :hover {
        background-color: orange;
        cursor: pointer;
    }
    
    img {
        width: 48px;
        height: 48px;
        border-radius: 100%;
    }

    p {
        margin-left: 10px;
    }
`

export function MatchProfile(props) {
    const profile = props.profile
    return (
        <MatchProfileContainer>
            <img src={profile.photo} alt="Foto do perfil"/>
            <p>{profile.name}, {profile.age}</p>
        </MatchProfileContainer>
    );
}