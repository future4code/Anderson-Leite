import React, {useState} from "react";
import styled from "styled-components";

const HomePage = styled.div`
    display: flex;
    flex-direction: column;
    color: black;
    background-color: white;
    width: 400px;
    height: 600px;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;
    border: 1px solid black;
`

const CardProfile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 8px;
    width: 320px;
    height: 360px;
`

const Buttons = styled.div`
    display: flex;
    width: 400px;
    justify-content: space-around;
    
    .buttonLike {
      font-size: 28px;
      border: 2px solid green;
      color: green;
      background-color: white;
      width: 72px;
      height: 72px;
      border-radius: 100%;

      &:hover {
        color: white;
        background-color: green;
      }
    }

    .buttonDislike {
      font-size: 28px;
      border: 2px solid red;
      color: red;
      background-color: white;
      width: 72px;
      height: 72px;
      border-radius: 100%;

      &:hover {
        color: white;
        background-color: red;
      }
    }
`

export function Home() {

// const [like, setLike] = useState(false);
// const [dislike, setDislike] = useState(false);

//   const onLike = () => {
//     setLike(like = true);
//   };

//   const onDislike = () => {
//     setDislike(dislike = true);
//   };

  return (
    <HomePage>
        FOOTER VAI AQUI
        <CardProfile>
          PERFIL VAI AQUI
        </CardProfile>
        <Buttons>
            <button className="buttonDislike" >X</button>
            <button className="buttonLike" >V</button>
        </Buttons>
    </HomePage>
  );
}