import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BASE_URL } from '../../constants/urls';
import { MatchProfile } from '../../components/Matches/MatchProfile';
import { ResetButton } from '../../components/ResetButton';

const MatchesPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 540px;
    overflow-y: auto;
`

export function MatchesPage(props) {
    const [getMatches, setMatches] = useState([])
    
    useEffect(() => {
        axios.get(`${BASE_URL}/matches`)
        .then((response) => {
            setMatches(response.data.matches)
        })
    }, []);

    return (
        <MatchesPageContainer>
            {getMatches.map((profile) => {
                return <MatchProfile profile={profile}/>
            })}
            <ResetButton />
        </MatchesPageContainer>
    )
}