import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <Link to="/">
        <img alt="pokeapi-logo" src={logoImg} className="navbar-img" />
      </Link>
      <Link to="/favorites">Favorites</Link> ({favoritePokemons.length}) ❤️
    </nav>
  );
};

export default Navbar;
