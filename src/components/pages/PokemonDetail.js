import React, { useEffect, useState } from "react";
import { getPokemonData, getPokemons } from "../../api";
import Navbar from "../Navbar";
import SetPokemonDetails from "../SetPokemonDetails";
import { FavoriteProvider } from "../../contexts/favoritesContext";
import { useParams } from "react-router-dom";

const favoritesKey = "f";
const PokemonDetail = (props) => {
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const { setPokemon } = props;
  const _setPokemon = useParams();

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(setPokemon);

      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const response = await Promise.all(promises);
      const res = response.find((pokemon) => pokemon.name === _setPokemon.name);

      setPokemons(res);

      setLoading(false);
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  const loadFavoritePokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(favoritesKey)) || [];
    setFavorites(pokemons);
  };

  useEffect(() => {
    loadFavoritePokemons();
  }, [pokemon]);

  useEffect(() => {
    fetchPokemons();
    // eslint-disable-next-line
  }, []);

  const updateFavoritePokemons = (pokemon) => {
    const updatedFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(pokemon);
    if (favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    } else {
      updatedFavorites.push(pokemon);
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons,
      }}
    >
      <div>
        <Navbar />
        <SetPokemonDetails
          pokemon={pokemon}
          loading={loading}
          favotites={favorites}
        />
      </div>
    </FavoriteProvider>
  );
};

export default PokemonDetail;
