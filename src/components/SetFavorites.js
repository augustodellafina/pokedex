import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const SetFavorites = (props) => {
  const { favorites ,loading, page, setPage, totalPages } = props;
  const onLeftClickHandler = () => {
      if(page > 0) {
          setPage(page-1)
      }
  }
  const onRightClickHandler = () => {
      if(page+1 !== totalPages){
          setPage(page+1)
      }
  }
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <Pagination
            page={page+1}
            totalPages={totalPages}
            onLeftClick={onLeftClickHandler}
            onRightClick={onRightClickHandler}
        />
      </div>
      {loading ? (
        <div>Carregando, segura fera...</div>
      ) : (
        <div className="pokedex-grid">
          {favorites && favorites.map((pokemons, index) => {
            console.log(favorites);
            return (
              <Pokemon key={index} pokemon={pokemons} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SetFavorites;
