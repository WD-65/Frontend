import { Link } from "react-router";

const PokemonCard = ({ pokemon }) => {
  const id = pokemon.url.split("/")[6] || "0";
  return (
    <div>
      <div className="card bg-base-100 m-2 w-96 shadow-sm">
        <figure>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt="Pokemon image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title capitalize">{pokemon.name}</h2>

          <div className="card-actions">
            <Link to={`pokemon/${pokemon.name}`}>
              <button className="btn btn-primary">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
