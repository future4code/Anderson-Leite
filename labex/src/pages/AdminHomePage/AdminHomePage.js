import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { useProtectedPage } from "../../hooks/useProtectPage";
import Buttons from "./Buttons";
import { useHistory } from "react-router";
import { BsTrash } from "react-icons/bs"

const AdminHomePageContainer = styled.div`
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
  width: 96%;
  height: auto;
  border: 2px solid black;
  border-radius: 8px;
  color: black;
  background-color: white;
  margin: 8px 0 8px 0;

  :hover {
      cursor: pointer;
  }
`

const Trip = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 12px 8px 12px 8px;

    span {
        font-size: 16px;
    }

    .trash {
        width: 24px;
        height: 24px;
        color: black;

        :hover {
            transform: scale(1.3);
            color: red;
        }
    }
`

function AdminHomePage() {
    useProtectedPage()
    
    const history = useHistory();
    
    const goBack = () => {
        history.goBack()
    }

    const goToCreateTripPage = () => {
        history.push("/admin/trips/create")
    }

    const goToTripDetailsPage = () => {
        history.push()
    }

    const logout = () => {
        localStorage.removeItem("token")
        history.push("/login")
    }

    const [getListTrips, setListTrips] = useState([])

    // const deleteTrip = (id) => {
    //     axios.delete(`${BASE_URL}/trips/${id}`, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             auth: "token"
    //         },
    //     })
    //     .then((res) => {
    //         localStorage.getItem("token", res.data.token);
    //         setListTrips(res.data.trips)
    //     })
    //     .catch((err) => {
    //         alert(err.message)
    //     })
    // }
    
    useEffect(() => {
        axios.get(`${BASE_URL}/trips`)
        .then((res) => {
            setListTrips(res.data.trips)
        })
        .catch((err) => {
            alert("Ocorreu um erro! Tente novamente.")
          });
        }, []);

    return (
        <>
        <Header />
        <AdminHomePageContainer>
            <Buttons onClickVoltar={goBack} onClickCriar={goToCreateTripPage} onClickLogout={logout}/>
            <h1>Gerenciar Viagens</h1>
            <ListTripsContainer>
                {getListTrips.map((trip) => {
                    return (
                        <ListTripsCard>
                            <Trip key={trip.id}>
                                <span onClick={goToTripDetailsPage(trip.id)}><b>{trip.name}</b></span>
                                <BsTrash className="trash" />
                            </Trip>
                        </ListTripsCard>
                    )})}
            </ListTripsContainer>
        </AdminHomePageContainer>
        </>
    )
}

export default AdminHomePage;
// Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas