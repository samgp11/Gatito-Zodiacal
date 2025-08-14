import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background-color: ${({ bgColor }) => bgColor || "#fdf6f0"};
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 24px;
  text-align: center;
`;

export const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: #fff;
  background-color: #ff6f61;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4c3b;
  }
`;