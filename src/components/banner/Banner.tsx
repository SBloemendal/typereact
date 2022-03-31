import { Link } from "react-router-dom";
import Pokemon from "../../interfaces/Pokemon";
import "./Banner.css";

function Banner(poke: Pokemon) {
  return (
    <section className="pkBanner d-flex flex-row b-5 justify-content-between">
      <Link to={`/detail/${poke.name}`} className="w-25">
        <img className="w-100" src={poke.imgUrl}></img>
      </Link>
      <div className="d-flex flex-column w-75 pt-5 pb-5">
        <h2 className="text-capitalize w-100">{poke.name}</h2>
        <p>Some description</p>
      </div>
    </section>
  );
}

export default Banner;
