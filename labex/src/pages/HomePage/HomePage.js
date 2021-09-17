import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

function HomePage() {
    return (
        <HomePageContainer>
            <Header />
        </HomePageContainer>
    );
}

export default HomePage;
// Para o usuário escolher entre Área Administrativa e Lista de Viagens