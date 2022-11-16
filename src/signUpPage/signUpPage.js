import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../mainComponents/logo";

export default function SignUp() {
  const navigate = useNavigate();

  async function signUp(f) {
    f.preventDefault();

    if(f.target.confirmPassword.value !== f.target.password.value ) {
      return alert("Passwords doesn`t match!!!")
    }

    const form = {
      name: f.target.name.value,
      email: f.target.email.value,
      password: f.target.password.value
    }
    
    try {
      await axios.post("http://localhost:5000/sign-up", form);
      alert("User created!!!");
      navigate("/");
    } catch(err) {
      alert(err.response.data);
    }
  }

  return (
    <Container>
      <Logo />
      <Form onSubmit={signUp}>
        <Input name="name" type="name" placeholder="Nome"></Input>
        <Input name="email" type="email" placeholder="E-mail"></Input>
        <Input name="password" type="password" placeholder="Senha"></Input>
        <Input name="confirmPassword" type="password" placeholder="Confirme Senha"></Input>
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
