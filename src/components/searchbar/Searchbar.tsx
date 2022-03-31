import React from "react";
import "./Searchbar.css";

function Searchbar({
  setSearchValue,
  cssClasses,
}: {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  cssClasses: string;
}) {
  const [search, setSearch] = React.useState("");
  function handleInputChange(event: any) {
    setSearchValue(event.target.value);
    setSearch(event.target.value);
  }
  return (
    <section className={`pkSearch d-flex ${cssClasses}`}>
      <form>
        <label htmlFor="pokemonSearch" className="d-flex">
          Who are you looking for?
        </label>
        <input
          name="pokemonSearch"
          type="text"
          value={search}
          onChange={handleInputChange}
        />
      </form>
    </section>
  );
}
export default Searchbar;
