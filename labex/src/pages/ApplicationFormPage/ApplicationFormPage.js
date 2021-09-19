import React from "react";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import { useForm } from "../../hooks/useForm";
import { useHistory } from "react-router";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

const ApplicationFormPageContainer = styled.div`
    display: flex;
    margin-top: 12vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;

    h1 {
        color: white;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 20%;
    }
`

function ApplicationFormPage() {
    const history = useHistory();

    const { form, onChange } = useForm({
        trip:"",
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: "",
    })

    // const applyToTrip = () => {
    //     axios.post(`${BASE_URL}/trips/${form.trip}/apply`)
    //     .then((res) => {
    //         alert("Inscrição realizada com sucesso!");
    //     })
    //     .catch((err) => {
    //         alert("Ocorreu um erro! Tente novamente.")
    //     });
    // };

    const onSubmitRegister = (body, headers) => {
      axios.post(`${BASE_URL}/trips/${form.trip}/apply`, body, headers)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/admin/trips/list")
      })
      .catch((err) => {
        alert("Algo deu errado! Tente novamente.");
      });
    };

    return (
        <ApplicationFormPageContainer>
            <Header />
            <h1>Formulário de Inscrição</h1>

            <form onSubmit={onSubmitRegister}>
                <select>
                    <option value disabled selected>Escolha uma viagem</option>
                    <option>Lua</option>
                    <option>Marte</option>
                    <option>Vênus</option>
                </select>
                <input
                    placeholder="Nome"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    pattern={"^.{0-9}"}
                    title={"O nome não pode conter números."}
                />
                <input
                    placeholder="Idade"
                    name="age"
                    type="number"
                    required min="18"
                    required max="80"
                    value={form.age}
                />
                <textarea style={{"max-width": '100px', "min-width": '50px', "max-height": '100px', "min-height": '50px'}}
                    placeholder="Texto de Candidatura"
                    name="text"
                    value={form.text}
                />
                <input
                    placeholder="Profissão"
                    name="occupation"
                    value={form.occupation}
                />
                <select placeholder="País" name="country" required>
                    <option value disabled selected>Escolha um país</option>
                    <option>Brasil</option>
                </select>
            </form>
            <button>Voltar</button>
            <button>Enviar</button>
        </ApplicationFormPageContainer>
    );
}

export default ApplicationFormPage;
// Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição