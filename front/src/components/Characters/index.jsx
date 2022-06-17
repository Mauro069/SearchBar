import styles from "./styles.module.scss";

export const Characters = ({ characters }) => {
  return (
    <>
      {characters.length > 0 ? (
        <div className={styles.characters}>
          {characters?.map((character) => (
            <Character character={character} key={character.id} />
          ))}
        </div>
      ) : (
        <div className={styles.error}>No se encontraron personajes...</div>
      )}
    </>
  );
};

const Character = ({ character }) => {
  return (
    <div className={styles.character}>
      <img src={character.image} alt={character.name} />
      <p>{character.name}</p>
    </div>
  );
};
