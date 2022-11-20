import styled from "styled-components";
import { IoIosLogOut } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { Contexto } from "../Context/Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Header({name}) {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken, dataEntry, setDataEntry, dataExit, setDataExit, user] = useContext(Contexto);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  
  function logOut() {
    setToken();
    navigate("/");
  }

  return (
    <Container>
      <BemVindo>Olá, {user}</BemVindo>
      <IoIosLogOut onClick={logOut}
        style={{ fontSize: "30px", color: "#FFFFFF", margin: "30px" }}
      />
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const BemVindo = styled.p`
  font-family: "Raleway";
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
  color: #ffffff;
  margin: 30px;
`;

