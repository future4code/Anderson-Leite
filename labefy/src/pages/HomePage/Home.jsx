import React from "react";
import { EstiloPagina } from "./styled";
import MenuLateral from "../../components/MenuLateral";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { BrowserRouter as Router, Route} from "react-router-dom"

export default class Home extends React.Component {
    render() {
        return (
            <Router>
            <EstiloPagina>
                <div className="home">
                    <div className="conteudo">
                        <MenuLateral />
                        <Main />
                        {/* <Route exact path="/tracks" render={(props) => <Tracks {...props} />} /> */}
                    </div>
                    <Footer />
                </div>
            </EstiloPagina>
            </Router>
        );
    }
}