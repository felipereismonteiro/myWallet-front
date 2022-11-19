import { IoIosAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";
import styled from "styled-components";

export default function Buttons() {
  return (
    <>
      <Botoes>
        <IoIosAddCircleOutline style={{ fontSize: "30px" }} />
        <Texto>Nova entrada</Texto>
      </Botoes>
      <Botoes>
        <IoMdRemoveCircleOutline style={{ fontSize: "30px" }} />
        <p>
          Nova <br /> saida
        </p>
      </Botoes>
    </>
  );
}

const Botoes = styled.button`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  font-size: 17px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: bold;
  color: white;
  margin: 20px;
  border: none;
  width: 100%;
  height: 114px;
  background: #a328d6;
  border-radius: 5px;
`;

const Texto = styled.p`
    max-width: 10px;
`