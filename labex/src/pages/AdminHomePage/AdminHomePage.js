import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";

const AdminHomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

function AdminHomePage() {
    return (
        <AdminHomePageContainer>
            <Header />
            AdminHomePage
        </AdminHomePageContainer>
    )
}

export default AdminHomePage;
// Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas