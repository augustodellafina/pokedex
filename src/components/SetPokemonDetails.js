import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";
import "../assets/js/card_3d_effect";
import Atropos from 'atropos/react';

const SetPokemonDetails = (props) => {
  const { pokemon, loading } = props;

  const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext);
  const onHeartClick = () => {
    updateFavoritePokemons(pokemon);
  };
  const heart = favoritePokemons.includes(pokemon) ? "Remove from favorites" : "Add to Favorites";
  
  return (
    <div>
      <div className="pokedex-header">
        <h2>Pokedex</h2>
      </div>
      {loading ? (
        <div>Carregando, segura fera...</div>
      ) : (
        <div className="pokedex-grid">
          <Atropos data-atropos-opacity="1" className="pokemon-card">
            <div className="card-content">
              <div className="pokemon-image-container">
                <img
                  alt={pokemon.name}
                  src={pokemon.sprites?.other.home.front_default}
                  className="pokemon-image"
                />
              </div>
              <div className="card-body">
                <div className="card-top">
                  <h1> {pokemon.name}</h1>
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
          </Atropos>
        </div>
      )}
    </div>
  );
};

export default SetPokemonDetails;
