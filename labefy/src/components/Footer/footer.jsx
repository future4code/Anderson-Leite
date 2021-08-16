import React from "react";
import styled from "styled-components";
import axios from "axios";

const EstiloFooter = styled.div`
    display: flex;
    width: 100%;
    height: 24vh;
    background-color: blue;
    justify-content: center;
    align-items: center;

    p {
        
    }
`

class Footer extends React.Component {
    render() {
        return (
            <EstiloFooter>
            <div className="footer">
                <p>LINK 1</p>
                <p>LINK 2</p>
                <p>LINK 3</p>
                <p>LINK 4</p>
                <p>LINK 5</p>
            </div>
            </EstiloFooter>
        );
    }
}

export default Footer;