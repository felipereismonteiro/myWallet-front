import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Contexto } from "../Context/Context";

export default function NewExit() {
  const [token, setToken, data, setData] = useContext(Contexto);
  const navigate = useNavigate();

  async function newEntry(f) {
    f.preventDefault();

    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }

    const newEntry = {
      name: data[0][0],
      value: f.target.valor.value,
      description: f.target.desc.value,
    }

    try {
      await axios.post("http://localhost:5000/exit", newEntry, config);
      navigate("/myWallet");
    } catch (err) {
      alert(err.response.data);
    }
  }

  return (
    <Container>
      <LogoName>Nova saída</LogoName>
      <Form onSubmit={newEntry}>
        <Input name="valor" type="number" placeholder="Valor"></Input>
        <Input name="desc" type="text" placeholder="Descrição"></Input>
        <InputSubmit type="submit" value="Salvar saída"></InputSubmit>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 90%;
  height: 58px;
  margin: 10px 0;

  font-family: "Raleway";
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
  line-height: 23px;

  box-sizing: border-box;
  padding: 10px;

  color: #000000;
`;

const InputSubmit = styled.input`
  background: #a328d6;
  border-radius: 5px;
  width: 90%;
  height: 58px;
  margin: 10px 0;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;

  color: #ffffff;
  border: none;
  margin-bottom: 20px;
`;

const LogoName = styled.h2`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 50px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;

  color: #ffffff;
`;
