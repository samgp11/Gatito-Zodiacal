import { useState, useEffect } from "react";
import axios from "axios";

export function useFetchCat(breedId) {
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!breedId) return;

    const fetchCat = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=1`
        );
        setCat(response.data[0]);
      } catch (error) {
        console.error("Error al obtener datos del gatito:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCat();
  }, [breedId]);

  return { cat, loading };
}