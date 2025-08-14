import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff8f0;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

export const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 8px;
  color: #333;
`;

export const Select = styled.select`
  padding: 8px;
  font-size: 1rem;
  margin-bottom: 16px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: ${({ bgColor }) => bgColor || "#ff6f61"};
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || "#ff4c3b"};
  }
`;