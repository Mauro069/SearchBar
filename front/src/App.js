import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import { SearchBar } from "./components/SearchBar";
import { Characters } from "./components/Characters";

import "./App.scss";

const App = () => {
  const [characters, setCharacters] = useState(null);
  const [characterSearch, setCharacterSearch] = useState("");

  const getCharacters = useCallback(async () => {
    if (characterSearch !== "") {
      await axios
        .get(`http://localhost:4000/?query=${characterSearch}`)
        .then(({ data }) => setCharacters(data.personajes));
    } else {
      await axios
        .get("http://localhost:4000/")
        .then(({ data }) => setCharacters(data.personajes));
    }
  }, [characterSearch]);

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  return (
    <div>
      <SearchBar characters setCharacterSearch={setCharacterSearch} />
      <Characters characters={characters} />
    </div>
  );
};

export default App;
