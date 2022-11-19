import styled from "styled-components";
import { IoIosLogOut } from "react-icons/io";
import { useContext } from "react";
import { Contexto } from "../Context/Context";
import { useNavigate } from "react-router-dom";

export default function Header() {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useContext(Contexto)
  const navigate = useNavigate();
  
  function logOut() {
    setToken();
    navigate("/");
  }

  return (
    <Container>
      <BemVindo>Olá, Fulano</BemVindo>
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

