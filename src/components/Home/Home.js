import React from "react";
import { MainContainer, Title, StyledLink } from "./Home.styles";

export default function Home({ bgColor }) {
  return (
    <MainContainer bgColor={bgColor}>
      <Title>¿Qué gatito eres según tu signo?</Title>
      <StyledLink to="/form">Descúbrelo aquí</StyledLink>
    </MainContainer>
  );
}