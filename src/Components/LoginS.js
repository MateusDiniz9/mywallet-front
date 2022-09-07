import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginS() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  function doLogin(e) {
    e.preventDefault();
    //função de login da api
    navigate("/inicio");
  }
  return (
    <Wraper>
      <h1>MyWallet</h1>
      <form onSubmit={doLogin}>
        <input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
      <Link to="/cadastro">
        <h6>Primeira vez? Cadastre-se!</h6>
      </Link>
    </Wraper>
  );
}

const Wraper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #8c11be;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: "Saira Stencil One", cursive;
    font-size: 32px;
    margin-top: 60%;
    color: white;
    margin-bottom: 50px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    width: 326px;
    height: 58px;
    border-radius: 5px;
    border: none;
    color: black;
    margin-bottom: 10px;
    padding-left: 10px;
    font-weight: 400;
    font-size: 20px;
  }
  button {
    width: 326px;
    height: 46px;
    background-color: #a328d6;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-bottom: 40px;
    border: none;
  }
  h6 {
    font-size: 15px;
    color: white;
  }
`;
