import { createContext } from "react";
import { useState, useContext } from "react";

export const SearchContext = createContext([]); //Idk if this needs to be an array or nothing or...

function SearchContextProvider({ children }) {
  const [results, setResults] = useState([]); // The data is searched in the Search component and then saved here.

  return (
    <SearchContext.Provider value={{ results, setResults }}>
      {children}
    </SearchContext.Provider>
  );
}

export const useSearchContext = () => {
  return useContext(SearchContext);
};

export default SearchContextProvider;