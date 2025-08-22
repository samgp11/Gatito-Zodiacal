import React from "react";
import { useParams } from "react-router-dom";
import { zodiacCatMap } from "../../utils/zodiacCats";
import { useFetchCat } from "../../hooks/useFetchCat";
import CatCard from "../CatCard/CatCard";
import { ResultContainer, ResultTitle, LoadingText } from "./Result.styles";

type ResultProps = {
  titleColor: string;
};

const Result: React.FC<ResultProps> = ({ titleColor }) => {
  const { signo } = useParams<{ signo: string }>();

  if (!signo) {
    return <LoadingText>Signo no válido</LoadingText>;
  }

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
        <CatCard cat={cat} maxWidth="350px" />
      )}
    </ResultContainer>
  );
};

export default Result;