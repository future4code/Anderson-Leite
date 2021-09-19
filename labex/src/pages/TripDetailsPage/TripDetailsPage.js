import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/urls";

const TripDetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 96%;
  height: auto;
  justify-content: center;
  align-items: flex-start;
  border: 2px solid black;
  border-radius: 8px;
  color: black;
  background-color: white;
  margin-top: 8px;

  p {
    margin: 2px 0 2px 4px;
  }
`

function TripDetailsPage(props) {
  const trip = props.trip

  useEffect (() => {
    const token = localStorage.getItem("token");
    
    axios.get(`${BASE_URL}/trip/GfJiFTYZVDQzlTs7UN6a`,
    {
      headers: {
        auth: token
      }
    })
    .then(res => {
      console.log(res.data.trips)
    })
    .catch(err => {
      console.log(err.res)
    })
  }, []);

  return (
    <>
    <Header />
      <TripDetailsCard>
        <p><b>Nome</b>: {trip.name}</p>
        <p><b>Descrição</b>: {trip.description}</p>
        <p><b>Planeta</b>: {trip.planet}</p>
        <p><b>Duração</b>: {trip.durationInDays} dias</p>
        <p><b>Data</b>: {trip.date}</p>
        <button onClick={props.onClickDelete}>Delete</button>
      </TripDetailsCard>
    </>
  );
}

export default TripDetailsPage;


// Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela