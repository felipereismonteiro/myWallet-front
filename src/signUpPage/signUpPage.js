import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../mainComponents/logo";

export default function SignUp() {
  return (
    <Container>
      <Logo />
      <Form>
        <Input type="text" placeholder="E-mail"></Input>
        <Input type="text" placeholder="Senha"></Input>
        <InputSubmit type="submit" value="Entrar"></InputSubmit>
        <Link to="/sign-in" style={{ textDecoration: "none" }}>
          <A href="#">Primeira vez? Cadastre-se!</A>
        </Link>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  height: 2000px;
  background-color: purple;
  box-sizing: border-box;
  padding-top: 150px;
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

const A = styled.a`
  color: #ffffff;
  font-family: "Raleway";
  margin: 15px auto;
  text-decoration: none;
  font-weight: bold;
`;
