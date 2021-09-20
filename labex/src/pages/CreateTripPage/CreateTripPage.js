import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import { useProtectedPage } from "../../hooks/useProtectPage";
import { useForm } from "../../hooks/useForm";
import { useHistory } from "react-router";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import Buttons from "./Buttons";

const CreateTripPageContainer = styled.div`
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

    button {
        color: white;
        background-color: orange;
        opacity: 0.9;
        font-weight: bold;
        width: 180px;
        height: 60px;
        border: 2px solid white;
        border-radius: 8px;
        margin: 64px 0 0 230px;

        p {
            font-size: 20px;
        }

        :hover {
            cursor: pointer;
            transform: scale(1.1);
        }
    }
`

function CreateTripPage() {
    useProtectedPage()

    const history = useHistory();
    
    const goBack = () => {
        history.goBack()
    }

    const { form, onChange, cleanFields } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: "",
    });

    const onSubmitCreate = (event) => {
        event.preventDefault();
        cleanFields();

        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays,
        }
        
        const token = localStorage.getItem("token");

        axios.post(`${BASE_URL}/trips`, body,
            {
                headers: { auth: token }
            })
            .then((res) => {
                alert("Viagem criada com sucesso!")
                console.log(res)
            })
            .catch((ERR) => {
                console.log(ERR)
            });
        }

    return (
        <>
            <Header />
            <CreateTripPageContainer>
                <h1>Criar Viagem</h1>

                <FormContainer>
                    <form onSubmit={onSubmitCreate}>
                        <input
                            placeholder="Nome"
                            name="name"
                            value={form.name}
                            onChange={onChange}
                            required
                            pattern={"^.{0-9}"}
                            title={"O nome não pode conter números."}
                        />
                        <select onChange={onChange} name="planet" value={form.planet}>
                            <option>Escolha um Planeta</option>
                            <option>Lua</option>
                            <option>Marte</option>
                            <option>Vênus</option>
                        </select>
                        <input
                            placeholder="dd / mm / aa"
                            name="date"
                            type="date"
                            value={form.date}
                            onChange={onChange}
                        />
                        <textarea style={{"max-width": '418px', "min-width": '418px', "max-height": '140px', "min-height": '140px'}}
                            placeholder="Descrição"
                            name="description"
                            type="text"
                            onChange={onChange}
                            value={form.description}
                        />
                        <input
                            placeholder="Duração em dias"
                            name="durationInDays"
                            type="number"
                            required min="50"
                            onChange={onChange}
                            value={form.durationInDays}
                        />
                        <select placeholder="País" name="country" value="country" required>
                            <option>Escolha um país</option>
                            <option>Brasil</option>
                        </select>
                        <button><p>Criar</p></button>
                    </form>
                </FormContainer>
                <Buttons onClickVoltar={goBack}/>
            </CreateTripPageContainer>
        </>
    )
}

export default CreateTripPage;

// Formulário para o administrador criar uma nova viagem