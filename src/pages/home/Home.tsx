import React, { useEffect, useState } from "react";
import "./Home.css";
import Pokemon from "../../interfaces/Pokemon";
import Banner from "../../components/banner/Banner";
import Roster from "../../components/roster/Roster";
import Searchbar from "../../components/searchbar/Searchbar";
import getPokemon from "../../utils/fetchApi";
import Constants from "../../utils/constants";

function Home() {
  const [activePokemon, setActivePokemon] = useState<Pokemon>();
  const [searchValue, setSearchValue] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>();

  useEffect(() => {
    getPokemon(Constants.API_URL).then((result: Pokemon[]) => {
      setPokemons(result);
    });
  }, []);

  return (
    <main className="pkHome">
      <h1 className="text-center">Pokemon Roster</h1>

      <Searchbar
        setSearchValue={setSearchValue}
        cssClasses="justify-content-center"
      />

      {pokemons && (
        <Roster
          pokemons={pokemons}
          setActivePokemon={setActivePokemon}
          searchValue={searchValue}
        />
      )}

      {activePokemon && <Banner {...activePokemon} />}
    </main>
  );
}

export default Home;
