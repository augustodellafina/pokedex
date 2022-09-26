import React from "react";
import Pokemon from "./Pokemon";

const SetPokemonDetails = (props) => {
  const { pokemon, loading } = props;
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
      </div>
      {loading ? (
        <div>Carregando, segura fera...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemon &&
            pokemon.slice(0, 1).map((pokemon, index) => {
              console.log(pokemon);
              return <Pokemon key={index} pokemon={pokemon} />;
            })}
        </div>
      )}
    </div>
  );
};

export default SetPokemonDetails;
