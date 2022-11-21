import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Contexto } from "../Context/Context";
import Header from "../mainComponents/header";
import Buttons from "./buttons";
import Entradas from "./dados";

export default function Wallet() {
  const [token, setToken, dataEntry, setDataEntry, dataExit, setDataExit] =
    useContext(Contexto);

  useEffect(() => {
    if (token !== undefined) {
      get();
    }
  },[])

  async function get() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const entries = await axios.get("https://mywallet-api-qtlk.onrender.com/entry", config);
    const exit = await axios.get("https://mywallet-api-qtlk.onrender.com/exit", config);
    setDataEntry(entries.data);
    setDataExit(exit.data);
  }

  return (
    <>
      <Header />
      <Dados>
        {dataExit.map((d) => (
          <Entradas
            key={d._id}
            Date={d.date.slice(0, 5)}
            Texto={d.description}
            type={d.typeof}
            value={d.value}
          />
        ))}
        {dataEntry.map((d) => (
          <Entradas
            key={d.id}
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
