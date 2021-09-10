import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../constants/urls';
import { Buttons } from '../../components/Profile/Buttons/Buttons';
import { ProfileCard } from '../../components/Profile/ProfileCard/ProfileCard';
import styled from 'styled-components';

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 540px;
`

export function HomePage() {
    const [profileToChoose, setProfileToChoose] = useState(undefined)

    const getProfileToChoose = () => {
        axios.get(`${BASE_URL}/person`)
        .then((response) => {
            setProfileToChoose(response.data.profile);
        });
    }
    
    const chooseProfile = (choice) => {
        const body = {
            id: profileToChoose.id,
            choice: choice
        };
        setProfileToChoose(undefined);
        axios.post(`${BASE_URL}/choose-person`, body)
        .then((response) => {
            console.log(response)
            getProfileToChoose();
        });
    }
    
    useEffect(() => {
        getProfileToChoose()
    }, []);
    
    const onClickX = () => {
        chooseProfile(false);
    }

    const onClickV = () => {
        chooseProfile(true);
    }
    
    return (
        <HomePageContainer>
            {profileToChoose ? (
                <>
                    <ProfileCard profile={profileToChoose}/>
                    <Buttons onClickX={onClickX} onClickV={onClickV}/>
                </>
            ) : (
                <p>Carregando...</p>
            )}            
        </HomePageContainer>
    );
}