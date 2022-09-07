import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NewExitS() {
  const navigate = useNavigate();

  const [value, setValue] = useState();
  const [description, setDescription] = useState("");

  function saveNewEntry(e) {
    e.preventDefault();
    //salvar valor na api
    navigate("/inicio");
  }

  return (
    <Wraper>
      <h1>Nova saída</h1>
      <form onSubmit={saveNewEntry}>
        <input
          type="text"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />{" "}
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Salvar saída</button>
      </form>
    </Wraper>
  );
}

const Wraper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #8c11be;
  display: flex;
  flex-direction: column;
  h1 {
    color: white;
    font-size: 26px;
    padding: 30px 30px;
    font-weight: bold;
    margin-bottom: 10px;
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
`;
