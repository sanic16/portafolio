import { searchAction } from "@/actions";
import classes from "./Navbar.module.css";
import { useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { FC } from "react";

type SearchInputProps = {
  lang: "es" | "en";
};

const SearchInput: FC<SearchInputProps> = ({ lang }) => {
  const searchParams = useSearchParams();

  return (
    <form
      className={classes.search__form}
      action={searchAction.bind(null, lang as "es" | "en")}
    >
      <input
        type="text"
        placeholder="Buscar..."
        className={classes.search__input}
        defaultValue={searchParams.get("term") || ""}
        name="term"
      />
      <button type="submit" className={classes.search__button}>
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchInput;
