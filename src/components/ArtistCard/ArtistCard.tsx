import "./ArtistCard.css";

interface Props {
  username: string;
  eth: string;
}

const ArtistCard = ({ username, eth }: Props) => {
  return (
    <div className="artistCard">
      <div className="artistCard__avatar">
        <img src={require("../../images/For.jpg")} alt="" />
      </div>
      <div className="artistCard__info">
        <h2>@{username}</h2>
        <h3>{eth} SR</h3>
      </div>
    </div>
  );
};

export default ArtistCard;
