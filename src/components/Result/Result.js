import React from "react";
import { useParams } from "react-router-dom";
import { zodiacCatMap } from "../../utils/zodiacCats";  // antes ../utils
import { useFetchCat } from "../../hooks/useFetchCat";  // antes ../hooks
import CatCard from "../CatCard/CatCard";               // antes ./CatCard
import { ResultContainer, ResultTitle, LoadingText } from "./Result.styles";

export default function Result({ titleColor }) {
  const { signo } = useParams();
  const breedId = zodiacCatMap[signo.toLowerCase()];
  const { cat, loading } = useFetchCat(breedId);

  if (!breedId) return <LoadingText>Signo no válido</LoadingText>;

  return (
    <ResultContainer>
      <ResultTitle color={titleColor}>
        Tu gato zodiacal: {signo.charAt(0).toUpperCase() + signo.slice(1)}
      </ResultTitle>
      {loading ? (
        <LoadingText>Cargando gatito...</LoadingText>
      ) : (
        <CatCard cat={cat} imgMaxWidth="350px" />
      )}
    </ResultContainer>
  );
}