import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export default function GifsApp() {
  const [previousTerms, setPreviousTerms] = useState(["goku", "dragon ball z"]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleTermClicked = (term: string) => {
    console.log(`Término buscado: ${term}`);
  };

  const handleSearch = async(query: string) => {
    query = query.trim().toLowerCase();
    if (query.length === 0) return;
    if (previousTerms.includes(query)) return;
    
    setPreviousTerms([query, ...previousTerms].slice(0, 7));

    const gifs = await getGifsByQuery(query);
    setGifs(gifs);
  };

  return (
    <>
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      <SearchBar 
        placeholder="Buscar gifs..." 
        onQuery={handleSearch} 
      />

      <PreviousSearches
        onLabelClicked={handleTermClicked}
        searches={previousTerms}
      />

      <GifList gifs={gifs} />
    </>
  );
}
