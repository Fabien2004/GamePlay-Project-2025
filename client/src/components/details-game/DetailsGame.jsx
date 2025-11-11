import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import gameService from "../../services/gameService";


export default function DetailsGame()
{
  const navigate = useNavigate();
  const [ game, setGame ] = useState({});
  const { gameId } = useParams();

  useEffect(() =>{
    (async () => {
    const result  = await gameService.getOne(gameId);
    setGame(result);
  })();
}, [gameId]);

const confirmClickDeleteHandler = async () => {
  const hasConfirm = confirm(`Are you sure you want to delete this ${game.title} game?`);
   if(!hasConfirm){
    return;
   }
   await gameService.delete(gameId);
   navigate('/games');
}

  return (
     <section id="game-details">
    <h1>Game Details</h1>
    <div className="info-section">
      <div className="game-header">
        <img className="game-img" src={game.imageUrl} />
        <h1>{game.title}</h1>
        <span className="levels">{game.maxLevel}</span>
        <p className="type">{game.category}</p>
      </div>
      <p className="text">
       {game.summary}
      </p>
      {/* Bonus ( for Guests and Users ) */}
      <div className="details-comments">
        <h2>Comments:</h2>
        <ul>
          {/* list all comments for current game (If any) */}
          <li className="comment">
            <p>Content: I rate this one quite highly.</p>
          </li>
          <li className="comment">
            <p>Content: The best game.</p>
          </li>
        </ul>
        {/* Display paragraph: If there are no games in the database */}
        <p className="no-comment">No comments.</p>
      </div>
      {/* Edit/Delete buttons ( Only for creator of this game )  */}
      <div className="buttons">
        <Link to="#" className="button">
          Edit
        </Link>
        <button 
        onClick={confirmClickDeleteHandler} 
        className="button"
        >
          Delete
        </button>
      </div>
    </div>
     <article className="create-comment">
      <label>Add new comment:</label>
      <form className="form">
        <textarea
          name="comment"
          placeholder="Comment......"
          defaultValue={""}
        />
        <input
          className="btn submit"
          type="submit"
          defaultValue="Add Comment"
        />
      </form>
    </article>
  </section>
  )
}