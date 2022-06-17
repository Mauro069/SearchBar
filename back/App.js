const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  const { query } = req.query;
  const { data } = await axios.get("https://rickandmortyapi.com/api/character");

  if (query) {
    const personajesFiltrados = data.results.filter((personaje) =>
      personaje?.name.toLowerCase().includes(query.toLowerCase())
    );
    res.json({ personajes: personajesFiltrados });
  } else {
    res.json({ personajes: data?.results });
  }
});

app.listen(4000, () => console.log("Server funcionando"));
