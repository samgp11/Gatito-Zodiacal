import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContainer, Label, Select, SubmitButton } from "./ZodiacForm.styles";

type ZodiacFormProps = {
  buttonColor: string;
  buttonHoverColor: string;
};

const ZodiacForm: React.FC<ZodiacFormProps> = ({ buttonColor, buttonHoverColor }) => {
  const [signo, setSigno] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    navigate(`/result/${signo}`);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label htmlFor="signo">Selecciona tu signo zodiacal:</Label>
      <Select 
        id="signo" 
        value={signo} 
        onChange={(e) => setSigno(e.target.value)} 
        required
      >
        <option value="">-- Elige uno --</option>
        <option value="aries">Aries</option>
        <option value="tauro">Tauro</option>
        <option value="geminis">Géminis</option>
        <option value="cancer">Cáncer</option>
        <option value="leo">Leo</option>
        <option value="virgo">Virgo</option>
        <option value="libra">Libra</option>
        <option value="escorpio">Escorpio</option>
        <option value="sagitario">Sagitario</option>
        <option value="capricornio">Capricornio</option>
        <option value="acuario">Acuario</option>
        <option value="piscis">Piscis</option>
      </Select>
      <SubmitButton bgColor={buttonColor} hoverColor={buttonHoverColor}>
        Ver mi gato
      </SubmitButton>
    </FormContainer>
  );
};

export default ZodiacForm;