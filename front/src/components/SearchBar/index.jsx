import styles from "./styles.module.scss";

export const SearchBar = ({ characterSearch, setCharacterSearch }) => {
  return (
    <div className={styles.searchBar}>
      <input
        type={"text"}
        value={characterSearch}
        name={characterSearch}
        placeholder="Busca un personaje..."
        onChange={(e) => setCharacterSearch(e.target.value)}
      />
    </div>
  );
};
