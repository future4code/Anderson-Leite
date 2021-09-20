import React from "react";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import { useForm } from "../../hooks/useForm";
import { useHistory } from "react-router";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import Buttons from "./Buttons";

const ApplicationFormPageContainer = styled.div`
    display: flex;
    margin-top: 12vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    h1 {
        color: white;
        margin: 16px 0 16px 0;
    }
`

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 464px;
    height: 286px;
    background-color: orange;
    justify-content: flex-start;
    align-items: center;
    opacity: 0.9;
    border: 2px solid white;
    border-radius: 8px;
    
    form {
        display: flex;
        flex-direction: column;
        width: 420px;
        margin: 22px 0 22px 0;
    }

`

function ApplicationFormPage() {
    const history = useHistory();
    
    const goBack = () => {
        history.goBack()
    }

    const { form, onChange } = useForm({
        trip:"",
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: "",
    })

    const applyToTrip = () => {
        axios.post(`${BASE_URL}/trips/${form.trip}/apply`)
        .then((res) => {
            alert("Inscrição realizada com sucesso!");
        })
        .catch((err) => {
            alert("Ocorreu um erro! Tente novamente.")
        });
    };

    const onSubmitRegister = () => {
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country,
        };
        applyToTrip(body)
    }

    return (
        <>
            <Header />
            <ApplicationFormPageContainer>
                <h1>Formulário de Inscrição</h1>

                <FormContainer>
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
                            onChange={onChange}
                        />
                        <textarea style={{"max-width": '418px', "min-width": '418px', "max-height": '140px', "min-height": '140px'}}
                            placeholder="Texto de Candidatura"
                            name="applicationText"
                            value={form.applicationText}
                            onChange={onChange}
                        />
                        <input
                            placeholder="Profissão"
                            name="profession"
                            value={form.profession}
                            onChange={onChange}
                        />
                        <select placeholder="País" name="country" value={form.country} required>
                            <option value disabled selected>Escolha um país</option>
                            <option>Brasil</option>
                        </select>
                        <button>Inscrever</button>
                    </form>
                </FormContainer>
                <Buttons onClickVoltar={goBack}/>
            </ApplicationFormPageContainer>
        </>
    );
}

export default ApplicationFormPage;
// Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição