import GlobalStyle from "./globalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../contexts/UserContext";
import LoginS from "./LoginS";
import SignUpS from "./SignUpS";
import InitialS from "./InitialS";
import NewEntryS from "./NewEntryS";
import NewExitS from "./NewExitS";

export default function App() {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider
        value={{
          token,
          setToken,
          name,
          setName,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginS />}></Route>
            <Route path="/cadastro" element={<SignUpS />}></Route>
            <Route path="/inicio" element={<InitialS />}></Route>
            <Route path="/novaentrada" element={<NewEntryS />}></Route>
            <Route path="/novasaida" element={<NewExitS />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
