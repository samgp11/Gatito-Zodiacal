import React from "react";
import { 
  CardContainer, 
  CatImage, 
  CatTitle, 
  CatDescription, 
  CatTemperament 
} from "./CatCard.styles";

type Breed = {
  name: string;
  description: string;
  temperament: string;
};

type Cat = {
  url: string;
  breeds?: Breed[];
};

type CatCardProps = {
  cat: Cat | null;
  maxWidth?: string;
};

const CatCard: React.FC<CatCardProps> = ({ cat, maxWidth }) => {
  if (!cat) return <p>No se pudo encontrar el gato.</p>;

  const breed = cat.breeds && cat.breeds.length > 0 ? cat.breeds[0] : null;

  return (
    <CardContainer maxWidth={maxWidth}>
      <CatImage
        src={cat.url}
        alt={breed ? breed.name : "Gato zodiacal"}
      />
      {breed ? (
        <>
          <CatTitle>{breed.name}</CatTitle>
          <CatDescription>{breed.description}</CatDescription>
          <CatTemperament>
            <strong>Temperamento:</strong> {breed.temperament}
          </CatTemperament>
        </>
      ) : (
        <CatDescription>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, sodales mus feugiat odio pharetra curabitur, faucibus eleifend class hac dis convallis. 
          Libero feugiat class fames lacus orci volutpat praesent condimentum, senectus erat gravida pharetra ultricies fusce turpis nunc ut, suspendisse mauris phasellus cursus primis nulla maecenas.
        </CatDescription>
      )}
    </CardContainer>
  );
};

export default CatCard;