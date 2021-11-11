import React from "react";
import {
  Button,
  Container,
  InputLogin,
  InputPassword,
  InputWrapper,
  Line,
  LoginImg,
  LoginSection,
  Title,
} from "./style";

const Login = () => {
  return (
    <Container>
      <LoginImg />
      <LoginSection>
        <Title>Tizimga hush kelibsiz !</Title>
        <Title.Description>
          Tizimga kirish uchun, login va parol orqali <br /> autentifikatsiya
          jarayonidan o’ting
        </Title.Description>
        <InputWrapper>
          <InputLogin placeholder="Login" type="email" />
          <Line />
          <InputPassword placeholder="Parol" type="password" />
        </InputWrapper>
        <Button>Tizimga kirish</Button>
      </LoginSection>
    </Container>
  );
};

export default Login;
