import { FC } from "react";
import classes from "./searchResult.module.css";
import SearchCard from "../searchCard/SearchCard";

type SearchResultProps = {
  searchResult: {
    id: string;
    title: string;
    description: string;
    path: string;
  }[];
};

const SearchResult: FC<SearchResultProps> = ({ searchResult }) => {
  if (searchResult.length === 0) {
    return (
      <div className={classes.noResult}>
        <p>No se encontraron resultados</p>
      </div>
    );
  }

  return (
    <div className={`container ${classes.search__result}`}>
      {searchResult.map((result) => (
        <SearchCard
          key={result.id}
          title={result.title}
          description={result.description}
          link={result.path}
        />
      ))}
    </div>
  );
};

export default SearchResult;
