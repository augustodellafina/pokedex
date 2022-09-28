import React, { useEffect, useState } from "react";
import { getPokemonData, getPokemons } from "../../api";
// import "../../App.css";
import Navbar from "../Navbar";
import SetFavorites from "../SetFavorites";
import { FavoriteProvider } from "../../contexts/favoritesContext";

const favoritesKey = "f"
function Favorites() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const itensPerPage = 24;
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  const loadFavoritePokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey)) || []
    setFavorites(pokemons)
  }

  useEffect(() => {
    loadFavoritePokemons()
  }, []);
  
  useEffect(() => {
    fetchPokemons();
    // eslint-disable-next-line
  }, [page]);

  const updateFavoritePokemons = (pokemon) => {
    const updatedFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(pokemon)
    if(favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    }else {
      updatedFavorites.push(pokemon);
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites);
  }

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons,
      }}
    >
      <div>
        <Navbar />
        <SetFavorites
          pokemons={pokemons}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          favorites={favorites}
        />
      </div>
    </FavoriteProvider>
  );
}

export default Favorites;
