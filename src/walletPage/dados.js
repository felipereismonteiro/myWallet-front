import styled from "styled-components";

export default function Entradas({ Date, Texto, type, value }) {
  return (
    <Container>
      <Desc>
        <p>{Date}</p> <p>{Texto}</p>
      </Desc>
      <Valor color={type}>{value}</Valor>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Desc = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px;
  && p:first-child {
    color: #c6c6c6;
    margin-right: 10px;
    margin-left: 10px;
  }
  && p {
    font-family: "Raleway";
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
`;

const Valor = styled.p`
  margin: 10px 20px;
  color: ${props => props.color === "Entry" ? "#03AC00" : "#C70000"}
`;
