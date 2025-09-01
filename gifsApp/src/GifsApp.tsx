import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export default function GifsApp() {
  const [previousTerms, setPreviousTerms] = useState(["goku", "dragon ball z"]);

  const handleTermClicked = (term: string) => {
    console.log(`Término buscado: ${term}`);
  };

  const handleSearch = (query: string) => {
    query = query.trim().toLowerCase();
    if (query.length === 0) return;
    if (previousTerms.includes(query)) return;
    
    setPreviousTerms([query, ...previousTerms].slice(0, 7));
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

      <GifList gifs={mockGifs} />
    </>
  );
}
