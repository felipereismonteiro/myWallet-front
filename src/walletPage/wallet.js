import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components";
import { Contexto } from "../Context/Context";
import Header from "../mainComponents/header";
import Buttons from "./buttons";
import Entradas from "./dados";

export default function Wallet() {
  const [token, setToken, dataEntry, setDataEntry, dataExit, setDataExit] =
    useContext(Contexto);

  if (token !== undefined) {
    getEntry();
  }

  async function getEntry() {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      if (token === undefined) {
        return false;
      }

      const entries = await axios.get("http://localhost:5000/entry", config);
      const exit = await axios.get("http://localhost:5000/exit", config);
      setDataEntry(entries.data);
      setDataExit(exit.data);
    } catch (err) {
      console.log(err.response.data);
    }
  }

  return (
    <>
      <Header />
      <Dados>
        {dataExit.map((d) => (
          <Entradas
            Date={d.date.slice(0, 5)}
            Texto={d.description}
            type={d.typeof}
            value={d.value}
          />
        ))}
        {dataEntry.map((d) => (
          <Entradas
            Date={d.date.slice(0, 5)}
            Texto={d.description}
            type={d.typeof}
            value={d.value}
          />
        ))}
      </Dados>
      <Container>
        <Buttons />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
`;

const Dados = styled.div`
  overflow-y: scroll;
  width: 90%;
  height: 446px;
  background-color: #ffffff;
  margin: 0 auto;
  box-sizing: border-box;
  padding-top: 20px;
  border-radius: 5px;
`;
