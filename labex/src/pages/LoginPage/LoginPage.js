import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/urls";
import { useForm } from "../../hooks/useForm";

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  form {
    display: flex;
    flex-direction: column;
    width: 280px;
    justify-content: center;
    align-items: center;

    input {
      width: 280px;
      padding: 2px;
      margin: 2px;
      background-color: white;
      border: 2px solid orange;
      border-radius: 4px;
      opacity: 0.9;
    }

    button {
      color: white;
      background-color: orange;
      opacity: 0.8;
      font-weight: bold;
      width: 180px;
      height: 60px;
      border: 2px solid white;
      border-radius: 8px;
      margin-top: 8px;

      p {
          font-size: 20px
      }

      :hover {
          cursor: pointer;
          transform: scale(1.1);
      }
    }
  }
`

function LoginPage() {
  const { form, onChange, cleanFields } = useForm({email: "", password: ""})

  const history = useHistory();

  const onSubmitLogin = (event) => {
    event.preventDefault();
    cleanFields();
  
  axios.post(`${BASE_URL}/login`, form)
  .then((res) => {
    localStorage.setItem("token", res.data.token);
    history.push("/admin/trips/list")
  })
  .catch((err) => {
    alert("Algo deu errado! Tente novamente.");
  });
};

  return (
    <>
      <Header />
      <LoginPageContainer>
        <form onSubmit={onSubmitLogin}>
          <input
            placeholder="E-mail"
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            required
          />
          <input
            placeholder="Senha"
            name="password"
            type="password"
            value={form.password}
            onChange={onChange}
            required
            pattern={"^.{6,}"} title={"A senha deve possuir no mínimo 6 caracteres."}
          />
          <button><p>Fazer login</p></button>
        </form>
      </LoginPageContainer>
    </>
  );
}

export default LoginPage;



// Para fazermos login como administrador