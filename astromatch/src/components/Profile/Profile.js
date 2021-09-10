import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../constants/urls';
import { ProfileButtons } from './ProfileButtons';
import { ProfileCard } from './ProfileCard';

export function ProfilePage() {
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
        <div>
            {profileToChoose ? (
                <>
                    <ProfileCard profile={profileToChoose}/>
                    <ProfileButtons onClickX={onClickX} onClickV={onClickV}/>
                </>
            ) : (
                <p>Carregando...</p>
            )}            
        </div>
    );
}