import React, { useEffect, useRef, useState } from "react";
import Pokemon from "../../interfaces/Pokemon";
import SwiperCore, { Virtual, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import getImage from "../../utils/utils";

import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/virtual";
import "./Roster.css";

// install Virtual module
// SwiperCore.use([Virtual, Lazy]);

export default function Roster({
  pokemons,
  setActivePokemon,
  searchValue,
}: {
  pokemons: Pokemon[];
  setActivePokemon: React.Dispatch<React.SetStateAction<Pokemon | undefined>>;
  searchValue: string;
}) {
  const [displayedPokemons, setDisplayedPokemons] = useState<Pokemon[]>();
  const maxLength = useRef(100);
  const offset = useRef(0);

  const swiperRef = React.useRef<SwiperCore>();
  const onInit = (Swiper: SwiperCore): void => {
    swiperRef.current = Swiper;
  };

  useEffect(() => {
    console.log("useEffect: ", displayedPokemons);
    displayedPokemons && setActivePokemon(displayedPokemons.at(0));
  }, [displayedPokemons]);

  useEffect(() => {
    const updtArray =
      searchValue && searchValue.length > 2
        ? pokemons.filter((pokemon) => pokemon.name.includes(searchValue))
        : pokemons.filter((item, index) => index < maxLength.current);
    updtArray.forEach((pokemon, idx) => {
      const imgUrl = getImage(pokemon);
      updtArray[idx] = { ...pokemon, imgUrl: imgUrl };
    });
    setDisplayedPokemons(updtArray);
  }, [searchValue]);

  const loadMore = () => {
    // when active index > maxlength - 25% => filter(index) offset = activeindex; get index after offset and until maxLength + offset
    maxLength.current += offset.current;
  };

  const selectPokemon = (
    pokemon: Pokemon,
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    console.log(
      "swiperRef.current",
      event.currentTarget.getAttribute("data-swiper-slide-index")
    );
    const targetIndex = event.currentTarget.getAttribute(
      "data-swiper-slide-index"
    );
    if (swiperRef.current) {
      swiperRef.current.slideTo(targetIndex as unknown as number);
    }
    setActivePokemon(pokemon);
  };

  return (
    <Swiper
      modules={[Virtual, Lazy]}
      onInit={onInit}
      preloadImages={false}
      lazy={true}
      slidesPerView={7}
      watchSlidesProgress={true}
      initialSlide={3}
      centerInsufficientSlides={true}
      centeredSlides={true}
      centeredSlidesBounds={false}
      grabCursor={true}
      // onSwiper={(swiper) => initSwiper(swiper)}
      onSlideChange={loadMore}
      virtual
      className="swiper pt-5 mb-5"
    >
      {displayedPokemons &&
        displayedPokemons.map((pokemon, idx) => (
          <SwiperSlide
            className="d-flex flex-column justify-content-center align-items-center"
            key={idx}
            virtualIndex={idx}
            onClick={(event) => selectPokemon(pokemon, event)}
          >
            <img
              width="217"
              height="217"
              alt={pokemon.name}
              title={pokemon.url}
              className="pkPokemonImage swiper-lazy w-100"
              data-src={pokemon.imgUrl}
            ></img>
            <div className="swiper-lazy-preloader"></div>
            <h5 className="text-center text-capitalize">{pokemon.name}</h5>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
