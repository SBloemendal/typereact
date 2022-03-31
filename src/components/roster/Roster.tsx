import React, { Suspense } from "react";
import Pokemon from "../../interfaces/Pokemon";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Roster.css";

const Swiper = React.lazy(() => import("./Swiper"));

export default function Roster({
  pokemons,
  setActivePokemon,
  searchValue,
}: {
  pokemons: Pokemon[];
  setActivePokemon: React.Dispatch<React.SetStateAction<Pokemon | undefined>>;
  searchValue: string;
}) {
  return (
    <section className="pkRoster">
      <Suspense fallback={<div>Loading...</div>}>
        <Swiper
          pokemons={pokemons}
          setActivePokemon={setActivePokemon}
          searchValue={searchValue}
        />
      </Suspense>
    </section>
  );
}
