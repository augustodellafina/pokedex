import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";
import { Link } from "react-router-dom";
import Atropos from "atropos/react";
import fire from "../assets/images/fire.png";
import bug from "../assets/images/bug.png";
import dark from "../assets/images/dark.png";
import dragon from "../assets/images/dragon.png";
import electric from "../assets/images/electric.png";
import fairy from "../assets/images/fairy.png";
import fighting from "../assets/images/fighting.png";
import flying from "../assets/images/flying.png";
import ghost from "../assets/images/ghost.png";
import grass from "../assets/images/grass.png";
import ground from "../assets/images/ground.png";
import ice from "../assets/images/ice.png";
import normal from "../assets/images/normal.png";
import poison from "../assets/images/poison.png";
import psychic from "../assets/images/psychic.png";
import rock from "../assets/images/rock.png";
import steel from "../assets/images/steel.png";
import water from "../assets/images/water.png";

import { IoIosStarOutline, IoIosStar } from "react-icons/io";

const Pokemon = props => {
  const { favoritePokemons, updateFavoritePokemons } = useContext(
    FavoriteContext
  );
  const { pokemon } = props;
  const onHeartClick = () => {
    updateFavoritePokemons(pokemon);
  };
  const heart = favoritePokemons.includes(pokemon) ? (
    <button
      className="pokemon-heart-btn"
      data-tooltip="Remove from favorites"
      onClick={onHeartClick}
    >
      <IoIosStar className="star-added" />
    </button>
  ) : (
    <button
      className="pokemon-heart-btn"
      data-tooltip="Add to favorites"
      onClick={onHeartClick}
    >
      <IoIosStarOutline className="star-add" />
    </button>
  );

  return (
    <Atropos
      rotateXMax={10}
      rotateYMax={10}
      className="col-12 col-sm-6 col-md-4 col-lg-3 my-2"
    >
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
                <div className="icons">
                  {pokemon.types?.map((type, index) => {
                    return (
                      <div key={index} className="pokemon-habilities-img">
                        {type.type.name === "fire" ? (
                          <img src={fire} alt="fire" />
                        ) : type.type.name === "normal" ? (
                          <img src={normal} alt="normal" />
                        ) : type.type.name === "flying" ? (
                          <img src={flying} alt="flying" />
                        ) : type.type.name === "bug" ? (
                          <img src={bug} alt="bug" />
                        ) : type.type.name === "dark" ? (
                          <img src={dark} alt="dark" />
                        ) : type.type.name === "dragon" ? (
                          <img src={dragon} alt="dragon" />
                        ) : type.type.name === "electric" ? (
                          <img src={electric} alt="electric" />
                        ) : type.type.name === "fairy" ? (
                          <img src={fairy} alt="fairy" />
                        ) : type.type.name === "fighting" ? (
                          <img src={fighting} alt="fighting" />
                        ) : type.type.name === "ghost" ? (
                          <img src={ghost} alt="ghost" />
                        ) : type.type.name === "grass" ? (
                          <img src={grass} alt="grass" />
                        ) : type.type.name === "ground" ? (
                          <img src={ground} alt="ground" />
                        ) : type.type.name === "ice" ? (
                          <img src={ice} alt="ice" />
                        ) : type.type.name === "poison" ? (
                          <img src={poison} alt="poison" />
                        ) : type.type.name === "psychic" ? (
                          <img src={psychic} alt="psychic" />
                        ) : type.type.name === "rock" ? (
                          <img src={rock} alt="rock" />
                        ) : type.type.name === "steel" ? (
                          <img src={steel} alt="steel" />
                        ) : type.type.name === "water" ? (
                          <img src={water} alt="water" />
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Link>
        {heart}
      </div>
    </Atropos>
  );
};

export default Pokemon;
