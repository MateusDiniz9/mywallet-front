import styled from "styled-components";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import { Link } from "react-router-dom";

export default function InitialS() {
  const { token, name } = useContext(UserContext);
  const [balance, setbalance] = useState(0);
  const [extract, setExtract] = useState([]);

  return (
    <Wraper>
      <Top>
        <h2>Olá, {name}</h2>
        <ion-icon name="log-out-outline"></ion-icon>
      </Top>
      <Records>
        {extract.length === 0 ? (
          <h2>Não há registros de entrada ou saída</h2>
        ) : (
          "tem algo"
        )}
      </Records>
      <News>
        <New to="/novaentrada">
          <ion-icon name="add-circle-outline"></ion-icon>
          <p>Nova entrada</p>
        </New>
        <New to="/novasaida">
          <ion-icon name="remove-circle-outline"></ion-icon>
          <p>Nova saída</p>
        </New>
      </News>
    </Wraper>
  );
}

const Wraper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #8c11be;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 26px;
  padding: 30px 20px;
  font-weight: bold;
`;

const Records = styled.div`
  width: 90%;
  height: 70%;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
  h2 {
    width: 200px;
    margin: 0 auto;
    margin-top: 75%;
    color: #868686;
    font-size: 20px;
    word-break: break-word;
    text-align: center;
  }
`;
const News = styled.div`
  width: 90%;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  margin: 0 auto;
`;
const New = styled(Link)`
  width: 48%;
  height: 90%;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  background-color: #a328d6;
  justify-content: space-between;
  border-radius: 5px;
  padding: 10px 10px;
  font-weight: bold;
  color: white;
  ion-icon {
    font-size: 30px;
  }
`;
