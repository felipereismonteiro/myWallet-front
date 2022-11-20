import axios from "axios";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Contexto } from "../Context/Context";
import Logo from "../mainComponents/logo";

export default function SignIn() {
  const [token, setToken, dataEntry, setDataEntry, dataExit, setDataExit, user, setUser] = useContext(Contexto);
  const navigate = useNavigate();

  async function submited(form) {
    form.preventDefault();
    const email = form.target.email.value;
    const password = form.target.password.value;

    try {
      const promisse = await axios.post("http://localhost:5000/sign-in", {
        email,
        password,
      });
      setUser(promisse.data.name);
      setToken(promisse.data.token);
      navigate("/myWallet");
    } catch (err) {
      alert(err.response.data);
    }
  }

  return (
    <Container>
      <Logo />
      <Form onSubmit={submited}>
        <Input name="email" type="email" placeholder="E-mail"></Input>
        <Input name="password" type="password" placeholder="Senha"></Input>
        <InputSubmit type="submit" value="Entrar"></InputSubmit>
        <Link
          to="/sign-up"
          style={{
            textDecoration: "none",
            color: "#ffffff",
            fontFamily: "Raleway",
            fontWeight: "bold",
          }}
        >
          Primeira vez? Cadastre-se!
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
