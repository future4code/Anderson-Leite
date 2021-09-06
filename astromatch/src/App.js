import React, { useState }from "react";
import styled from "styled-components";
import { HomePage } from "./pages/HomePage/HomePage";
import { MatchesPage } from "./pages/MatchesPage/MatchesPage";
import { NavBar } from "./components/NavBar/NavBar";
import { ResetButton } from "./components/ResetButton";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 400px;
  height: 600px;
  border-radius: 8px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
`

function App() {
  const [selectedPage, setSelectedPage] = useState("homePage")

  const renderSelectedPage = () => {
    switch (selectedPage) {
      case "homePage":
        return <HomePage />;
      case "matchesPage":
        return <MatchesPage />;
      default:
        return <HomePage />;
    }
  }

  const goToHomePage = () => {
    setSelectedPage("homePage");
  }

  const goToMatchesPage = () => {
    setSelectedPage("matchesPage");
  }

  return (
    <AppContainer>
      <NavBar 
        goToHomePage={goToHomePage}
        goToMatchesPage={goToMatchesPage}
      />
      {renderSelectedPage()}
    </AppContainer>
  );
}

export default App;