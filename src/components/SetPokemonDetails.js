import React from "react";
import Pokemon from "./Pokemon";

const SetPokemonDetails = (props) => {
  const { details, loading } = props;
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
      </div>
      {loading ? (
        <div>Carregando, segura fera...</div>
      ) : (
        <div className="pokedex-grid">
          {details && details.map((pokemons, index) => {
            console.log(pokemons);
            return (
              <Pokemon key={index} details={details} />
            )
          })}
        </div>
      )}
    </div>
  );
};

export default SetPokemonDetails;
