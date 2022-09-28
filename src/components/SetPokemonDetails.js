import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const SetPokemonDetails = (props) => {
  const { pokemon, loading } = props;

  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const onHeartClick = () => {
    updateFavoritePokemons(pokemon);
  };
  const heart = favoritePokemons.includes(pokemon) ? "Remove from favorites" : "Add to Favorites";
  
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
      </div>
      {loading ? (
        <div>Carregando, segura fera...</div>
      ) : (
        <div className="pokedex-grid">
          <div className="pokemon-card">
            <div className="pokemon-image-container">
              <img
                alt={pokemon.name}
                src={pokemon.sprites?.other.home.front_default}
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
                  {pokemon.types?.map((type, index) => {
                    return (
                      <div key={index} className="pokemon-type-text">
                        {type.type.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <button className="pokemon-heart-btn" onClick={onHeartClick}>
              {heart}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SetPokemonDetails;
