import React from "react";

export default function CatCard({ cat }) {
  if (!cat) return <p>No se pudo encontrar el gato.</p>;

  const breed = cat.breeds && cat.breeds.length > 0 ? cat.breeds[0] : null;

  return (
    <div className="cat-card">
      <img
        src={cat.url}
        alt={breed ? breed.name : "Gato zodiacal"}
        style={{ maxWidth: "300px" }}
      />
      {breed ? (
        <>
          <h3>{breed.name}</h3>
          <p>{breed.description}</p>
          <p><strong>Temperamento:</strong> {breed.temperament}</p>
        </>
      ) : (
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sodales mus feugiat odio pharetra curabitur, faucibus eleifend class hac dis convallis. Libero feugiat class fames lacus orci volutpat praesent condimentum, senectus erat gravida pharetra ultricies fusce turpis nunc ut, suspendisse mauris phasellus cursus primis nulla maecenas. Nam massa volutpat dictumst ac eros maecenas, urna litora fringilla rhoncus ultricies cubilia, suspendisse dui auctor dapibus sociis.

Metus accumsan hendrerit lectus non congue malesuada convallis aliquet auctor, fusce rhoncus pharetra scelerisque quam dignissim nisl sociosqu vitae placerat, euismod cubilia lobortis cras quis dui ut lacus. Malesuada rhoncus libero ac pellentesque magnis aptent massa magna justo egestas phasellus vestibulum viverra, platea eros montes sed sociosqu mi suspendisse sapien scelerisque quis penatibus. Feugiat suscipit sodales faucibus primis blandit quisque tellus nam, accumsan duis aenean venenatis mollis nisi ligula luctus arcu, curae lobortis congue aliquet nullam porta integer.</p>
      )}
    </div>
  );
}