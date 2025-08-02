import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <h1>¿Qué gatito eres según tu signo?</h1>
      <Link to="/form">Descúbrelo aquí</Link>
    </main>
  );
}