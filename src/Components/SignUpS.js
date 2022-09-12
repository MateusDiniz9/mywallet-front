import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import * as apiFunction from "../services/mywallet.js";

export default function SignUpS() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirme, setPasswordConfirme] = useState("");

  const navigate = useNavigate();

  function signUp(e) {
    e.preventDefault();
    if (!(password === passwordConfirme)) {
      setPasswordConfirme("");
      alert("senhas nao coincidem");
    } else {
      const body = { name, email, password };
      apiFunction.signUp(body).then((res) => {
        alert("cadastrado com sucesso");
        navigate("/");
      });
    }
  }

  return (
    <Wraper>
      <h1>MyWallet</h1>
      <form onSubmit={signUp}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <input
          type="text"
          placeholder="Confirme a senha"
          value={passwordConfirme}
          onChange={(e) => setPasswordConfirme(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
      <Link to="/">
        <h6>Já tem uma conta? Entre agora!</h6>
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
