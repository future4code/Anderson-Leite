import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Buttons from "./Buttons";

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

function LoginPage() {
  return (
    <LoginPageContainer>
      <Header />
      <input placeholder="email"/>
      <input placeholder="senha"/>
      <Buttons />
    </LoginPageContainer>
  );
}

export default LoginPage;



// Para fazermos login como administrador