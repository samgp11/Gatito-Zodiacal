import React from "react";
import { MainContainer, Title, StyledLink } from "./Home.styles";

type HomeProps = {
  bgColor: string;
};

const Home: React.FC<HomeProps> = ({ bgColor }) => {
  return (
    <MainContainer bgColor={bgColor}>
      <Title>¿Qué gatito eres según tu signo?</Title>
      <StyledLink to="/form">Descúbrelo aquí</StyledLink>
    </MainContainer>
  );
};

export default Home;