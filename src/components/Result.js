import React from "react";
import { useParams } from "react-router-dom";
import { zodiacCatMap } from "../utils/zodiacCats";
import { useFetchCat } from "../hooks/useFetchCat";
import CatCard from "./CatCard";

export default function Result() {
  const { signo } = useParams();
  const breedId = zodiacCatMap[signo.toLowerCase()];
  const { cat, loading } = useFetchCat(breedId);

  if (!breedId) return <p>Signo no válido</p>;

  return (
    <div>
      <h2>Tu gato zodiacal: {signo.charAt(0).toUpperCase() + signo.slice(1)}</h2>
      {loading ? <p>Cargando gatito...</p> : <CatCard cat={cat} />}
    </div>
  );
}