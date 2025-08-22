import styled from "styled-components";

interface CardContainerProps {
  maxWidth?: string;
}

export const CardContainer = styled.div<CardContainerProps>`
  background-color: #fff8f0;
  border-radius: 12px;
  padding: 16px;
  max-width: ${({ maxWidth }) => maxWidth || "350px"};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 16px auto;
`;

export const CatImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const CatTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 8px;
  color: #333;
`;

export const CatDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 8px;
`;

export const CatTemperament = styled.p`
  font-size: 0.95rem;
  color: #777;
`;