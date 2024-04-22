function PlayerCard({ player }) {
  // TODO
  // Details
  // The user can click a details button (or something similar) on each puppy that will lead them to another page view with specific details on that puppy, such as owner and team name.

  return (
    <div>
      <div>
        <p>{player.name}</p>
        <p>{`#${player.id}`}</p>
      </div>
      <img src={player.imageUrl} alt={`photo of ${player.name} the puppy`} />
      <button>See details</button>
      <button>Remove from roster</button>
    </div>
  );
}

export default PlayerCard;
 