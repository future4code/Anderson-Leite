import React from "react";
import styled from "styled-components";

export default class Main extends React.Component {
    
    render() {
      return (
        <div className="App">
          <EstiloPagina>
            {/* <Header /> */}
            <MenuLateral />
            <Footer />
          </EstiloPagina>
        </div>
      );
    }
  }       