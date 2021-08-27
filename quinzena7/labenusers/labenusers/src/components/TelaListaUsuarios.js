import React from "react";
import axios from "axios";
import styled from "styled-components"

const CardUsuario = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
`

export default class TelaListaUsuarios extends React.Component {
    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: "anderson-leite"
            }
        })
        .then((res) => {
            this.setState({usuarios: res.data})
        })
        .catch((err) => {
            alert("Ocorreu um erro! Tente novamente!")
        })
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "anderson-leite"
            }
        })
        .then((res) => {
            alert("Usuário(a) deletado(a) com sucesso!")
            this.pegarUsuarios()
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    render() {
        const listaUsuarios = this.state.usuarios.map((user) => {
            return (
                <CardUsuario key={user.id}>
                    {user.name}
                    <button onClick={() => this.deletarUsuario(user.id)}>X</button>
                </CardUsuario>
            )
        })

        return (
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Lista de Usuários</h2>
                {listaUsuarios}
            </div>
        )
    }
}