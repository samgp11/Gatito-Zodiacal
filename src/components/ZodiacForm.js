import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ZodiacForm() {
  const [signo, setSigno] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/result/${signo}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="signo">Selecciona tu signo zodiacal:</label>
      <select id="signo" value={signo} onChange={(e) => setSigno(e.target.value)} required>
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
      </select>
      <button type="submit">Ver mi gato</button>
    </form>
  );
}