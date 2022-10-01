import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";
import "../assets/js/card_3d_effect";
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

const SetPokemonDetails = (props) => {
  const { pokemon, loading } = props;

  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
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
    <div>
      <div className="pokedex-header">
        <h2>Pokedex</h2>
      </div>
      {loading ? (
        <div>Carregando, segura fera...</div>
      ) : (
        <div className="pokedex-grid-detail">
          <Atropos rotateXMax={10} rotateYMax={10}>
            <div className="pokemon-card-3d">
              <div className="pokemon-card-detail" data-atropos-opacity="1">
                <div className="card-content"></div>
                <div className="card-body">
                  <div className="card-top">
                    <h1 data-atropos-offset="4"> {pokemon.name}</h1>
                    <div>
                      <div className="pokemon-habilities">
                        <div className="pokemon-hp">
                          {pokemon.base_experience} HP
                        </div>
                        {pokemon.types?.slice(0, 1).map((type, index) => {
                          return (
                            <div key={index} className="pokemon-type">
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
                  <div
                    data-atropos-offset="1"
                    className="pokemon-image-container"
                  >
                    <img
                      data-atropos-offset="5"
                      alt={pokemon.name}
                      src={pokemon.sprites?.other.home.front_default}
                      className="pokemon-image"
                    />
                  </div>
                  <div className="card-bottom">
                    <div className="pokemon-habilities">
                      {pokemon.types?.slice(0, 1).map((type, index) => {
                        return (
                          <div key={index} className="pokemon-habilities-title">
                            <div className="title-bg">
                              <div data-atropos-offset="2">
                                {type.type.name} Pokémon. Weight:{" "}
                                {pokemon.weight}lbs, Length: {pokemon.height}"
                              </div>
                            </div>
                          </div>
                        );
                      })}
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
                      <div className="pokemon-attack">
                        Attack
                        {pokemon.stats
                          ?.filter((pokemon) => pokemon.stat.name === "attack")
                          .map((stat, index) => {
                            return (
                              <div
                                key={index}
                                className="attack"
                                data-atropos-offset="2"
                              >
                                {stat.base_stat}
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>

                {heart}
              </div>
              <div className="bg-card" />
            </div>
          </Atropos>
        </div>
      )}
    </div>
  );
};

export default SetPokemonDetails;
