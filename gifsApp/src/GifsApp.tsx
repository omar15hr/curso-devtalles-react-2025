import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { useGifs } from "./hooks/useGifs";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export default function GifsApp() {
  const { gifs, previousTerms, handleSearch, handleTermClicked } = useGifs();

  return (
    <>
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      <SearchBar placeholder="Buscar gifs..." onQuery={handleSearch} />

      <PreviousSearches
        onLabelClicked={handleTermClicked}
        searches={previousTerms}
      />

      <GifList gifs={gifs} />
    </>
  );
}
