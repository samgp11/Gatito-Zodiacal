import styled from "styled-components";

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const ResultTitle = styled.h2`
  font-size: 1.8rem;
  color: ${({ color }) => color || "#333"};
  margin-bottom: 16px;
  text-align: center;
`;

export const LoadingText = styled.p`
  font-size: 1rem;
  color: #555;
`;