import React from "react";
import styled from "styled-components";
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage";
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage";
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage";
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage";
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Background from "../assets/space.jpg";

const RouterContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
`

function Router() {
    return (
        <RouterContainer>

            <BrowserRouter>

                <Switch>

                    <Route exact path={"/"}>
                        <HomePage />
                    </Route>

                    <Route exact path={"/trips/list"}>
                        <ListTripsPage />
                    </Route>

                    <Route exact path="/trips/application">
                        <ApplicationFormPage />
                    </Route>

                    <Route exact path={"/login"}>
                        <LoginPage />
                    </Route>

                    <Route exact path="/admin/trips/list">
                        <AdminHomePage />
                    </Route>

                    <Route exact path="/admin/trips/create">
                        <CreateTripPage />
                    </Route>

                    <Route exact path="/admin/trips/:id">
                        <TripDetailsPage />
                    </Route>

                </Switch>

            </BrowserRouter>  

        </RouterContainer>
    )
}

export default Router;