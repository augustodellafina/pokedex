import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";
import { Link } from "react-router-dom";

const Pokemon = (props) => {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const { pokemon } = props;
  const onHeartClick = () => {
    updateFavoritePokemons(pokemon);
  };
  const heart = favoritePokemons.includes(pokemon) ? "❤️" : "🖤";
  return (
    <div className="pokemon-card">
      <Link to={`/pokemon/${pokemon.name}`}>
        <div className="pokemon-image-container">
          <img
            alt={pokemon.name}
            src={pokemon.sprites.front_default}
            className="pokemon-image"
          />
        </div>
        <div className="card-body">
          <div className="card-top">
            <h3> {pokemon.name}</h3>
            <div>#{pokemon.id}</div>
          </div>
          <div className="card-bottom">
            <div className="pokemon-type">
              {pokemon.types.map((type, index) => {
                return (
                  <div key={index} className="pokemon-type-text">
                    {type.type.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Link>
      <button className="pokemon-heart-btn" onClick={onHeartClick}>
        {heart}
      </button>
    </div>
  );
};

export default Pokemon;
