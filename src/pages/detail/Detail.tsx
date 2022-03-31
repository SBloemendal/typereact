import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pokemon from "../../interfaces/Pokemon";
import getPokemons from "../../utils/fetchApi";
import Constants from "../../utils/constants";
import "./Detail.css";

function Detail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    id &&
      getPokemons(Constants.API_URL, id).then((resp) => {
        const result = resp as Pokemon;
        setPokemon(result);
      });
  }, []);

  if (typeof pokemon === "undefined") {
    return null;
  }

  return (
    <div className="pkDetail">
      <h1>Detail {id}</h1>
      <p>{pokemon.name}</p>
      <img src={pokemon.url}></img>
    </div>
  );
}

export default Detail;
