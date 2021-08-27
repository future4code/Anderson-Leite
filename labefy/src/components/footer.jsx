import React from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.png";
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";

const EstiloFooter = styled.div`
    display: flex;
    width: 100%;
    height: 56vh;
    color: white;
    background-color: black;
    justify-content: space-evenly;

    .footer-top {
        display: flex;
        width: 1100px;
        margin-top: 80px;
    }

    .columns {
        display: flex;
        width: 900px;
        justify-content: space-between;
    }

    .socialMedias {
        display: flex;
        width: 160px;
        height: 0;
        justify-content: space-between;
        align-items: flex-start;
        margin: 0 0 0 100px;
        img {
            width: 32px;
            height: 32px;
            background-color: black;
        }
    }

    .column-1 {
        display: flex;
        align-items: center;
        height: 51px;
        img {
            width: 36px;
            height: 36px;
        }
    }

    p {
        text-shadow: 0px 0px 1px #ffffff;

    &:hover {
        text-shadow: 0px 0px 1px #ffa600;
        cursor: pointer;
        color: orange;
        }
    }

    h1 {
        margin: 0 0 0 8px;
    }

    h4 {
        color: #808080;
    }

    .footer-bottom {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin-top: 90px;
        color: #808080;
        
        small {
            text-shadow: 0px 0px 1px #616161;
        }
    }

    .footer-bottom-left {
        display: flex;
        width: 560px;
        justify-content: space-between;
        
        small:hover {
            text-shadow: 0px 0px 1px #ffa600;
            cursor: pointer;
            color: orange;
        }
    }

    .footer-bottom-right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
`

export default class Footer extends React.Component {
    handleClick = () => {
        alert("Em desenvolvimento.");
    }

    render() {
        return (
            <EstiloFooter>
            <div className="footer">
                <div className="footer-top">
                    <div className="columns">
                        <div className="column-1">
                            <img src={Logo}/>
                            <h1>Labefy</h1>
                        </div>
                        <div className="column-2">
                            <h4>EMPRESA</h4>
                            <p onClick={this.handleClick}>Sobre</p>
                            <p onClick={this.handleClick}>Empregos</p>
                            <p onClick={this.handleClick}>For the Record</p>
                        </div>
                        <div className="column-3">
                            <h4>COMUNIDADES</h4>
                            <p onClick={this.handleClick}>Para Artistas</p>
                            <p onClick={this.handleClick}>Desenvolvedores</p>
                            <p onClick={this.handleClick}>Publicidade</p>
                            <p onClick={this.handleClick}>Investidores</p>
                            <p onClick={this.handleClick}>Fornecedores</p>
                        </div>
                        <div className="column-4">
                            <h4>LINKS ÚTEIS</h4>
                            <p onClick={this.handleClick}>Suporte</p>
                            <p onClick={this.handleClick}>Player da Web</p>
                            <p onClick={this.handleClick}>Aplicativo móvel grátis</p>
                        </div>
                    </div>
                
                    <div className="socialMedias">
                        <a target="_blank" href="http://www.instagram.com"><img src={Instagram}/></a>
                        <a target="_blank" href="http://www.twitter.com"><img src={Twitter}/></a>
                        <a target="_blank" href="http://www.facebook.com"><img src={Facebook}/></a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-left">
                        <small onClick={this.handleClick}>Legal</small>
                        <small onClick={this.handleClick}>Centro de privacidade</small>
                        <small onClick={this.handleClick}>Política de privacidade</small>
                        <small onClick={this.handleClick}>Cookies</small>
                        <small onClick={this.handleClick}>Sobre anúncios</small>
                    </div>

                    <div className="footer-bottom-right">
                        <small>Brasil</small>
                        <small>© 2021 Labefy</small>
                    </div>
                </div>
            </div>
            </EstiloFooter>
        );
    }
}