import { FC } from "react";
import prisma from "@/lib/prisma";
import SearchResult from "../searchResult/SearchResult";

type SearchProps = {
  term: string;
  lang: "en" | "es";
};

const Search: FC<SearchProps> = async ({ term, lang }) => {
  const search = await prisma.route.findMany({
    where: {
      AND: [
        {
          OR: [
            {
              title: {
                contains: term,
                mode: "insensitive",
              },
            },
            {
              description: {
                contains: term,
                mode: "insensitive",
              },
            },
          ],
        },
        { lang },
      ],
    },
    select: {
      id: true,
      title: true,
      description: true,
      path: true,
    },
  });

  return <SearchResult searchResult={search} />;
};

export default Search;
