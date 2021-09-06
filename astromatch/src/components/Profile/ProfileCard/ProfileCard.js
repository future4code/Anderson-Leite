import React from "react";
import styled from "styled-components";

const ProfileCardStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    /* background-color: blueviolet; */
    width: 100%;
    height: 360px;
    
    img {
      border: 1px solid black;
      border-radius: 8px;
      margin-top: 20px;
      width: 360px;
      height: 380px;
      justify-content: center;
      /* position: relative; */
    }

    .profile-info {
      position: relative;
      bottom: 120px;
      left: 8px;
      color: blue;
      /* text-shadow: 0px 0px 200px #546546; */
    }
`

export function ProfileCard(props) {
  const profile = props.profile
  return (
    <ProfileCardStyle>
      <img src={profile.photo} alt="Foto da pessoa" />
      <div className="profile-info">
        <p>{profile.name}, {profile.age}</p>
        <p>{profile.bio}</p>
      </div>
    </ProfileCardStyle>
  );
}