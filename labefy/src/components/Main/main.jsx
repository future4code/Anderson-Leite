import React from "react";
import styled from "styled-components";
import axios from "axios";
import MenuLateral from "./menuLateral";

class Main extends React.Component {
    render() {
      return (
        <div className="main">
            <MenuLateral />
        </div>
      );
    }
  }
  
  export default Main;