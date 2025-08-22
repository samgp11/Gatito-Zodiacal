import { useState, useEffect } from "react";
import axios from "axios";

type Breed = {
  name: string;
  description: string;
  temperament: string;
};

type Cat = {
  id: string;
  url: string;
  breeds?: Breed[];
};

type UseFetchCatResult = {
  cat: Cat | null;
  loading: boolean;
};

export function useFetchCat(breedId: string | undefined): UseFetchCatResult {
  const [cat, setCat] = useState<Cat | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!breedId) return;

    const fetchCat = async () => {
      setLoading(true);
      try {
        const response = await axios.get<Cat[]>(
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