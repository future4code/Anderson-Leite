import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Buttons from "./Buttons";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

const ListTripsPageContainer = styled.div`
  display: flex;
  margin-top: 8vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  h1 {
    color: white;
    margin: 16px 0 16px 0;
  }
`

const ListTripsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid white;
  border-radius: 8px;
  width: 620px;
  height: 660px;
  background-color: orange;
  overflow: auto;
  opacity: 0.9;
`

const ListTripsCard = styled.div`
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
  margin: 8px 0 8px 0;

  p {
    margin: 2px 0 2px 4px;
  }
`

function ListTripsPage() {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  const goToApplicationFormPage = () => {
    history.push("/trips/application")
  }

  const [listTrips, setListTrips] = useState([]);
    
    useEffect(() => {
      axios.get(`${BASE_URL}/trips`)
      .then((res) => {
        setListTrips(res.data.trips)
      })
      .catch((err) => {
        alert("Ocorreu um erro! Tente novamente.")
      })
    }, []);
  
  return (
    <>
    <Header />
    <ListTripsPageContainer>
      <Buttons onClickVoltar={goBack} onClickInscrever={goToApplicationFormPage}/>
      <h1>Lista de Viagens</h1>
        <ListTripsContainer>
          {listTrips.map((trip) => {
            return (
              <ListTripsCard key={trip.id}>
                <p><b>Nome</b>: {trip.name}</p>
                <p><b>Descrição</b>: {trip.description}</p>
                <p><b>Planeta</b>: {trip.planet}</p>
                <p><b>Duração</b>: {trip.durationInDays} dias</p>
                <p><b>Data</b>: {trip.date}</p>
              </ListTripsCard>
          )})}
        </ListTripsContainer>
    </ListTripsPageContainer>
    </>
  );
}

export default ListTripsPage;



// Para vermos todas as viagens