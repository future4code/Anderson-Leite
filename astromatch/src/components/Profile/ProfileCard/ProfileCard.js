import React from "react";
import styled from "styled-components";

const ProfileCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 440px;
    
    img {
        border-radius: 8px;
        margin: 20px;
        width: 360px;
        height: 400px;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 8px black;
        position: relative;
    }

    .profile-info {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        width: 340px;
        height: 380px;
        color: white;
        text-shadow: 2px 1px 1px black;
        position: absolute;
    }
`

export function ProfileCard(props) {
  const profile = props.profile
  return (
    <ProfileCardContainer>
        <img src={profile.photo} alt="Foto da pessoa" />
        <div className="profile-info">
            <h2>{profile.name}, {profile.age}</h2>
            <p>{profile.bio}</p>
        </div>
    </ProfileCardContainer>
  );
}