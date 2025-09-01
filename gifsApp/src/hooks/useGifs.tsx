import { useState } from "react";
import { getGifsByQuery } from "../gifs/actions/get-gifs-by-query.action";
import type { Gif } from "../gifs/interfaces/gif.interface";

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleTermClicked = async(term: string) => {
    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
  };

  const handleSearch = async (query: string = "") => {
    query = query.trim().toLowerCase();
    if (query.length === 0) return;
    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].slice(0, 7));

    const gifs = await getGifsByQuery(query);
    setGifs(gifs);
  };

  return {
    gifs,
    previousTerms,
    handleSearch,
    handleTermClicked,
  };
};
