import Pokemon from "../interfaces/Pokemon";
import Constants from "../utils/constants";

export default function getImage(pokemon: Pokemon) {
  const id = pokemon.url.slice(0, -1).split("/").pop();
  console.log("id: ", id);
  return `${Constants.IMG_URL}${id}.png`;
}
