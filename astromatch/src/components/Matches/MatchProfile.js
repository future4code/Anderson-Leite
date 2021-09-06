import React from 'react';
import styled from 'styled-components';

const MatchProfileContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
    
    :hover {
        background-color: lightgray;
    }
    
    img {
        width: 40px;
        height: 40px;
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
            <img src={profile.photo}/>
            <p>{profile.name}, {profile.age}</p>
        </MatchProfileContainer>
    );
}