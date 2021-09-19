import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import { useProtectedPage } from "../../hooks/useProtectPage";

const CreateTripPageContainer = styled.div`
    display: flex;
    color: blueviolet;
    background-color: yellow;
    width: 100%;

    h1 {
        color: blueviolet;
    }
`

function CreateTripPage() {
    useProtectedPage()
    return (
        <>
            <Header />
            <CreateTripPageContainer>
                <h1>ASFDADASDKASOKOPASKAOPDSKASD</h1>
            </CreateTripPageContainer>
        </>
    )
}

export default CreateTripPage;

// Formulário para o administrador criar uma nova viagem