import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Buttons from "./Buttons";
import { useHistory } from "react-router-dom";

const ListTripsPageContainer = styled.div`
  display: flex;
  margin-top: 10vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  h1 {
    color: white;
  }
`

function ListTripsPage() {
  const history = useHistory()

  const goToAdminHomePage = () => {
    history.push("/admin/trips/list")
  }

  const goBack = () => {
    history.goBack()
  }
  
  return (
    <ListTripsPageContainer>
        <Header />
        <Buttons onClickVoltar={goBack} onClickAdmin={goToAdminHomePage}/>
        <h1>LISTA DE VIAGENS</h1>
    </ListTripsPageContainer>
  );
}

export default ListTripsPage;



// Para vermos todas as viagens