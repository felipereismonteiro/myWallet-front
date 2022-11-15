import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../mainComponents/logo";

export default function SignIn() {
  return (
    <Container>
      <Logo />
      <Form>
        <Input type="text" placeholder="Nome"></Input>
        <Input type="text" placeholder="E-mail"></Input>
        <Input type="text" placeholder="Senha"></Input>
        <Input type="text" placeholder="Confirme Senha"></Input>
        <InputSubmit type="submit" value="Cadastrar"></InputSubmit>
        <Link to="/" style={{textDecoration: "none", color: "#ffffff", fontFamily: "Raleway", fontWeight: "bold"}}>
          Já tem uma conta? Entre agora!
        </Link>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  height: 2000px;
  background-color: purple;
  box-sizing: border-box;
  padding-top: 50px;
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