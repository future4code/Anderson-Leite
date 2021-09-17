import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";

const TripDetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

function TripDetailsPage(props) {
  return (
    <TripDetailsCard>
      <Header />
    </TripDetailsCard>
  );
}

export default TripDetailsPage;


// Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela