import { useEffect, useState } from "react";
import gameServices from "../../services/gameServices";
import GameCatalogItem from "../../game-item/GameCatalogItem";

export default function CatalogGame() {
  const [games, setGames] = useState([]);
 
  useEffect(() => {
      gameServices.getAll()
      .then(setGames)
  }, []);

  return (
     <section id="catalog-page">
    <h1>All Games</h1>
    {games.length > 0
      ? games.map(game => <GameCatalogItem key={game._id} {...game}/>)
      :  <h3 className="no-articles">No articles yet</h3>
    }
  </section>
  );
}