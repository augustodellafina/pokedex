import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getPokemonData, getPokemons, searchPokemon } from "../../api";
// import "../../App.css";
import Navbar from "../Navbar";
import Pokedex from "../Pokedex";
import Searchbar from "../Searchbar";
import { FavoriteProvider } from "../../contexts/favoritesContext";

const favoritesKey = "f";
function Home() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const itensPerPage = 12;
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async pokemon => {
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
    const pokemons =
      JSON.parse(window.localStorage.getItem(favoritesKey)) || [];
    setFavorites(pokemons);
  };

  useEffect(() => {
    loadFavoritePokemons();
  }, []);

  useEffect(() => {
    fetchPokemons();
    // eslint-disable-next-line
  }, [page]);

  const updateFavoritePokemons = name => {
    const updatedFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(name);
    if (favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    } else {
      updatedFavorites.push(name);
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  const onSearchHandler = async pokemon => {
    if (!pokemon) {
      return fetchPokemons();
    }

    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
  };

  if (useLocation().pathname === "/") {
    document.body.removeAttribute("class");
  }

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons
      }}
    >
      <div>
        <div className="pokedex-header container">
          <Navbar />
          <Searchbar onSearch={onSearchHandler} />
        </div>
        {notFound ? (
          <div class-name="not-found-text"> Meteu essa?! </div>
        ) : (
          <Pokedex
            pokemons={pokemons}
            loading={loading}
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />
        )}
      </div>
    </FavoriteProvider>
  );
}

export default Home;
